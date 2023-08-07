import { clsx } from 'clsx';
import FlexSearchLib from 'flexsearch';
import { ComponentProps, JSXElement, Show, createSignal } from 'solid-js';
import { HighlightMatches } from './HighlightMatches';
import { Search } from './Search';

type SearchResult = ComponentProps<typeof Search>['results'][number];

type SectionIndex = FlexSearchLib.Document<
  {
    id: string;
    url: string;
    title: string;
    pageId: string;
    content: string;
    display?: string;
  },
  ['title', 'content', 'url', 'display']
>;

type PageIndex = FlexSearchLib.Document<
  {
    id: number;
    title: string;
    content: string;
  },
  ['title']
>;

type Result = {
  _page_rk: number;
  _section_rk: number;
  route: string;
  prefix: () => JSXElement;
  children: () => JSXElement;
};

type SearchData = {
  [route: string]: {
    title: string;
    data: Record<string, string>;
  };
};

const indices = {} as { current: [PageIndex, SectionIndex] };

const loadIndexesPromise = {
  current: undefined,
} as { current?: Promise<void> };
const loadIndexes = () => {
  if (!loadIndexesPromise.current) loadIndexesPromise.current = loadIndexesImpl();
  return loadIndexesPromise.current!;
};
const loadIndexesImpl = async () => {
  const data: SearchData = await fetch('/search-data.json').then((res) => res.json());
  const pageIndex: PageIndex = new FlexSearchLib.Document({
    cache: 100,
    tokenize: 'full',
    document: {
      id: 'id',
      index: 'content',
      store: ['title'],
    },
    context: {
      resolution: 9,
      depth: 2,
      bidirectional: true,
    },
  });
  const sectionIndex: SectionIndex = new FlexSearchLib.Document({
    cache: 100,
    tokenize: 'full',
    document: {
      id: 'id',
      index: 'content',
      tag: 'pageId',
      store: ['title', 'content', 'url', 'display'],
    },
    context: {
      resolution: 9,
      depth: 2,
      bidirectional: true,
    },
  });

  let pageId = 0;
  for (const route in data) {
    let pageContent = '';
    ++pageId;

    for (const heading in data[route].data) {
      const [hash, text] = heading.split('#');
      const url = route + (hash ? '#' + hash : '');
      const title = text || data[route].title;

      const content = data[route].data[heading] || '';
      const paragraphs = content.split('\n').filter(Boolean);

      sectionIndex.add({
        id: url,
        url,
        title,
        pageId: `page_${pageId}`,
        content: title,
        ...(paragraphs[0] && { display: paragraphs[0] }),
      });

      for (let i = 0; i < paragraphs.length; i++) {
        sectionIndex.add({
          id: `${url}_${i}`,
          url,
          title,
          pageId: `page_${pageId}`,
          content: paragraphs[i],
        });
      }

      // Add the page itself.
      pageContent += ` ${title} ${content}`;
    }

    pageIndex.add({
      id: pageId,
      title: data[route].title,
      content: pageContent,
    });
  }
  indices.current = [pageIndex, sectionIndex];
};

export function FlexSearch(props: { class?: string }) {
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal(false);
  const [results, setResults] = createSignal<SearchResult[]>([]);
  const [search, setSearch] = createSignal('');

  const doSearch = (search: string) => {
    if (!search) return;
    const [pageIndex, sectionIndex] = indices.current;

    // Show the results for the top 5 pages
    const pageResults =
      pageIndex.search<true>(search, 5, {
        enrich: true,
        suggest: true,
      })[0]?.result || [];

    const results: Result[] = [];
    const pageTitleMatches: Record<number, number> = {};

    for (const [pageIndex, pageResult] of pageResults.entries()) {
      pageTitleMatches[pageIndex] = 0;

      // Show the top 5 results for each page
      const sectionResults =
        sectionIndex.search<true>(search, 5, {
          enrich: true,
          suggest: true,
          tag: `page_${pageResult.id}`,
        })[0]?.result || [];

      let isFirstItemOfPage = true;
      const occurred: Record<string, boolean> = {};

      for (const [sectionIndex, sectionResult] of sectionResults.entries()) {
        const { doc } = sectionResult;
        const isMatchingTitle = doc.display !== undefined;
        if (isMatchingTitle) {
          pageTitleMatches[pageIndex]++;
        }
        const { url, title } = doc;
        const content = doc.display || doc.content;
        if (occurred[url + '@' + content]) continue;
        occurred[url + '@' + content] = true;
        results.push({
          _page_rk: pageIndex,
          _section_rk: sectionIndex,
          route: url,
          prefix: () => (
            <Show when={/*@once*/ isFirstItemOfPage}>
              <div
                class={
                  /*@once*/ clsx(
                    'mx-2.5 mb-2 mt-6 select-none border-b border-black/10 px-2.5 pb-1.5 text-xs font-semibold uppercase text-gray-500 first:mt-0 dark:border-white/20 dark:text-gray-300',
                    'contrast-more:border-gray-600 contrast-more:text-gray-900 contrast-more:dark:border-gray-50 contrast-more:dark:text-gray-50',
                  )
                }>
                {/*@once*/ pageResult.doc.title}
              </div>
            </Show>
          ),
          children: () => (
            <>
              <div class="text-base font-semibold leading-5">
                <HighlightMatches match={/*@once*/ search}>{/*@once*/ title}</HighlightMatches>
              </div>
              <Show when={/*@once*/ content}>
                <div class="excerpt mt-1 text-sm leading-[1.35rem] text-gray-600 dark:text-gray-400 contrast-more:dark:text-gray-50">
                  <HighlightMatches match={/*@once*/ search}>{/*@once*/ content}</HighlightMatches>
                </div>
              </Show>
            </>
          ),
        });
        isFirstItemOfPage = false;
      }
    }

    setResults(
      results
        .sort((a, b) => {
          // Sort by number of matches in the title.
          if (a._page_rk === b._page_rk) {
            return a._section_rk - b._section_rk;
          }
          if (pageTitleMatches[a._page_rk] !== pageTitleMatches[b._page_rk]) {
            return pageTitleMatches[b._page_rk] - pageTitleMatches[a._page_rk];
          }
          return a._page_rk - b._page_rk;
        })
        .map((res) => ({
          id: `${res._page_rk}_${res._section_rk}`,
          route: res.route,
          prefix: res.prefix,
          children: res.children,
        })),
    );
  };

  const preload = async (active: boolean) => {
    if (active && !indices.current) {
      setLoading(true);
      try {
        await loadIndexes();
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }
  };

  const handleChange = async (value: string) => {
    setSearch(value);
    if (loading()) {
      return;
    }
    if (!indices.current) {
      setLoading(true);
      try {
        await loadIndexes();
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }
    doSearch(value);
  };

  return (
    <Search
      loading={loading()}
      error={error()}
      value={search()}
      onInput={handleChange}
      onActive={preload}
      class={props.class}
      overlayClassName="w-screen min-h-[100px] max-w-[min(calc(100vw-2rem),calc(100%+20rem))]"
      results={results()}
    />
  );
}
