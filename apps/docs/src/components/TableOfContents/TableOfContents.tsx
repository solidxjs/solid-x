import { For, Show, createEffect, createSignal, onCleanup } from 'solid-js';
import { Anchor } from '../Anchor';
import { usePageState } from '../context/PageStateContext';
import styles from './TableOfContents.module.scss';

function useActiveAnchor(sections: ReturnType<typeof usePageState>['sections']) {
  const [activeAnchor, setActiveAnchor] = createSignal(sections()[0]?.slug);

  createEffect(() => {
    if (sections().length === 0) return;

    const headings = sections()
      .map(({ slug }) => {
        const el = document.getElementById(slug);
        if (!el) return undefined;
        const style = window.getComputedStyle(el);
        const scrollMt = parseFloat(style.scrollMarginTop) + 1;
        const top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
        return { slug, top };
      })
      .filter(Boolean) as { slug: string; top: number }[];

    function onScroll() {
      const top = window.scrollY;
      let current = headings[0]?.slug;

      for (const heading of headings) {
        if (top >= heading.top) {
          current = heading.slug;
          continue;
        }
        break;
      }
      setActiveAnchor(current);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    onCleanup(() => {
      window.removeEventListener('scroll', onScroll);
    });
  });

  return activeAnchor;
}

export const TableOfContents = () => {
  let root: HTMLDivElement | undefined;
  const { sections } = usePageState();
  const activeAnchor = useActiveAnchor(sections);

  return (
    <section ref={root} class={styles.toc}>
      <Show when={sections().length > 0}>
        <h1 class={styles.tocHeading}>On this page</h1>
        <ul>
          <For each={sections()}>
            {(heading) => (
              <li class={styles.tocItem}>
                <a
                  href={`#${heading.slug}`}
                  classList={{
                    [styles.tocAnchor]: true,
                    [styles.tocAnchorActive]: activeAnchor() === heading.slug,
                    [styles.tocAnchorInactive]: activeAnchor() !== heading.slug,
                    [styles.tocAnchor2]: heading.depth === 2,
                    [styles.tocAnchor3]: heading.depth === 3,
                    [styles.tocAnchor4]: heading.depth === 4,
                    [styles.tocAnchor5]: heading.depth === 5,
                    [styles.tocAnchor6]: heading.depth === 6,
                  }}>
                  {heading.text}
                </a>
              </li>
            )}
          </For>
        </ul>
        <div class={styles.tocSeparator} />
      </Show>
      <Anchor
        class={`${styles.tocAnchorFooter} ${styles.tocAnchorInactive}`}
        href="https://github.com/solid-ui/solid-x/issues/new?title=Feedback%20for%20“Solid%20X”&labels=feedback"
        newWindow>
        Question? Give us feedback
      </Anchor>
    </section>
  );
};
