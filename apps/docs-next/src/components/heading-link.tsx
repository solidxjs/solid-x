import clsx from 'clsx';
import { ComponentProps, createEffect, splitProps } from 'solid-js';
import { ActiveAnchor, useIntersectionObserver, useSetActiveAnchor, useSlugs } from './active-anchor';
import { Dynamic } from 'solid-js/web';

// Anchor links
export function HeadingLink(props: ComponentProps<'h2'> & {
  tag: `h${2 | 3 | 4 | 5 | 6}`
  context: { index: number }
}) {
  const setActiveAnchor = useSetActiveAnchor();
  const slugs = useSlugs();
  const observer = useIntersectionObserver();
  let obRef: HTMLAnchorElement | undefined;
  const [local, others] = splitProps(props, ['children', 'context', 'id', 'tag']);

  createEffect(() => {
    if (!local.id || !obRef) return;

    const heading = obRef;
    slugs.set(heading, [local.id, (local.context.index += 1)]);
    observer?.observe(heading);

    return () => {
      observer?.disconnect();
      slugs.delete(heading);
      setActiveAnchor?.((a: ActiveAnchor) => {
        const ret = { ...a };
        if (local.id) delete ret[local.id];
        return ret as ActiveAnchor;
      });
    };
  });

  return (
    <Dynamic
      component={local.tag}
      class={clsx(
        'font-semibold tracking-tight text-slate-900 dark:text-slate-100',
        {
          h2: 'mt-10 border-b pb-1 text-3xl border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400',
          h3: 'mt-8 text-2xl',
          h4: 'mt-8 text-xl',
          h5: 'mt-8 text-lg',
          h6: 'mt-8 text-base'
        }[local.tag]
      )}
      {...others}
    >
      {local.children}
      <span class="absolute -mt-20" id={local.id} ref={obRef} />
      <a
        href={`#${local.id}`}
        class="subheading-anchor"
        aria-label="Permalink for this section"
      />
    </Dynamic>
  );
}
