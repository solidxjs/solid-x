import clsx from 'clsx';
import { For, createEffect, createMemo } from 'solid-js';
import { isServer } from 'solid-js/web';
import { HeadingsMeta } from '~/root.types';
import { useActiveAnchor } from './active-anchor';
import { Anchor } from './anchor';

const linkClassName = clsx(
  'text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100',
  'contrast-more:text-gray-800 contrast-more:dark:text-gray-50'
);

type TOCProps = {
  contents: HeadingsMeta[]
};

export function TOC(props: TOCProps) {
  let root: HTMLDivElement | undefined;
  const activeAnchor = useActiveAnchor();
  const activeSlug = createMemo(() => Object.entries(activeAnchor).find(
    ([, { isActive }]) => isActive
  )?.[0]);

  createEffect(() => {
    if (!activeSlug() || isServer) return;

    const anchor = root?.querySelector(
      `li > a[href="#${activeSlug}"]`
    );

    if (anchor) {
      (window as any).scrollIntoView(anchor, {
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
        scrollMode: 'always',
        boundary: root
      });
    }
  });

  return (
    <div
      ref={root}
      class={clsx(
        'sticky top-16 overflow-y-auto pr-4 pt-6 text-sm hyphens-auto',
        'max-h-[calc(100vh-var(--sx-header-height))] me-4'
      )}
    >
      {
        props.contents.length > 0 && (
          <>
            <p class="mb-4 font-semibold tracking-tight">
              On this page
            </p>
            <ul>
              <For each={props.contents}>
                {(heading) => (
                  <li class="my-2 scroll-my-6 scroll-py-6">
                    <a
                      href={`#${heading.slug}`}
                      class={clsx(
                        {
                          2: 'font-semibold',
                          3: 'ps-4',
                          4: 'ps-8',
                          5: 'ps-12',
                          6: 'ps-16'
                        }[heading.depth],
                        'inline-block contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50 w-full break-words',
                        activeAnchor[heading.slug]?.isActive ?
                          'text-primary-600 subpixel-antialiased contrast-more:!text-primary-600' :
                          'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
                      )}
                    >
                      {heading.text}
                    </a>
                  </li>
                )}
              </For>
            </ul>
          </>
        )
      }
      <div
        class={clsx(
          props.contents.length &&
          'mt-8 border-t bg-white pt-8 shadow-[0_-12px_16px_white] dark:bg-dark dark:shadow-[0_-12px_16px_#111]',
          'sticky bottom-0 flex flex-col items-start gap-2 pb-8 dark:border-neutral-800',
          'contrast-more:border-t contrast-more:border-neutral-400 contrast-more:shadow-none contrast-more:dark:border-neutral-400'
        )}
      >
        <Anchor
          class={linkClassName}
          href="https://github.com/solid-ui/solid-x/issues/new?title=Feedback%20for%20“Solid%20X”&labels=feedback"
          newWindow
        >
          Question? Give us feedback
        </Anchor>
      </div>
    </div>
  );
}
