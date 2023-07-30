import { Link, useLocation } from '@solidjs/router';
import _ from 'lodash';
import { ParentProps, Show, createMemo } from 'solid-js';
import { createServerData$ } from 'solid-start/server';
import { mods, sections } from '~/root';
import { PageMeta, SectionsMeta } from '~/root.types';
import { ActiveAnchorProvider } from './active-anchor';
import { SideBar } from './sidebar';
import { TOC } from './toc';

interface LayoutProps extends ParentProps {
  page: string;
}

export function Layout(props: LayoutProps) {
  const location = useLocation();

  const toc = createServerData$(
    async pathname => {
      const mod = mods[`./routes${pathname}.mdx`];
      return (await mod?.())?.getHeadings().filter(h => h.depth > 1 && h.depth <= 3) ?? [];
    },
    {
      key: () => location.pathname,
    }
  );
  const navs = createServerData$(
    async page => {
      const section = sections[`./routes/${page}/_meta.ts`];
      return (await section?.())?.default ?? [];
    },
    {
      key: () => props.page,
    }
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const flatten = (item: SectionsMeta) => [item, _.flatMapDeep(item.links, flatten)];
  const allLinks = createMemo(() => _.flatMapDeep(navs(), flatten).filter(i => i.type === 'page'));
  const linkIndex = createMemo(() => allLinks().findIndex(link => link.href === location.pathname));
  const previousPage = createMemo(() => allLinks()[linkIndex() - 1] as PageMeta);
  const nextPage = createMemo(() => allLinks()[linkIndex() + 1] as PageMeta);

  return (
    <>
      <div class="relative flex justify-center dark:bg-dark">
        <ActiveAnchorProvider>
          <div class="hidden lg:relative lg:block lg:flex-none">
            <div class="sticky top-[61px] h-[calc(100vh-61px)] overflow-y-auto py-6 pl-6 pr-2">
              <SideBar items={navs() ?? []} />
            </div>
          </div>
          <div class="min-w-0 mx-auto max-w-2xl flex-auto px-4 xl:px-16 py-16 lg:max-w-4xl">
            <article>
              {props.children}
            </article>
            <div class="mt-12 flex border-t border-gray-200 pt-6 dark:border-gray-800">
              <Show when={previousPage()}>
                <dl>
                  <dt class="font-display text-sm font-medium text-gray-900 dark:text-white">
                    Previous
                  </dt>
                  <dd class="mt-1">
                    <Link
                      href={previousPage().href}
                      class="text-base font-semibold text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      <span aria-hidden="true" class="mr-1">
                        &larr;
                      </span>
                      <span>{previousPage().title}</span>
                    </Link>
                  </dd>
                </dl>
              </Show>
              <Show when={nextPage()}>
                <dl class="ml-auto text-right">
                  <dt class="font-display text-sm font-medium text-gray-900 dark:text-white">Next</dt>
                  <dd class="mt-1">
                    <Link
                      href={nextPage().href}
                      class="text-base font-semibold text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      <span>{nextPage().title}</span>
                      <span aria-hidden="true" class="ml-1">
                        &rarr;
                      </span>
                    </Link>
                  </dd>
                </dl>
              </Show>
            </div>
          </div>
          <TOC contents={toc() ?? []} />
        </ActiveAnchorProvider>
      </div>
    </>
  );
}
