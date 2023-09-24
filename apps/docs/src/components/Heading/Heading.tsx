import { ComponentProps, onMount, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { usePageState } from '../context/PageStateContext';
import styles from './Heading.module.scss';

// Anchor links
export const Heading = (
  props: ComponentProps<'h2'> & {
    tag: `h${2 | 3 | 4 | 5 | 6}`;
  },
) => {
  const { addSection } = usePageState();
  let obRef: HTMLAnchorElement | undefined;
  const [local, others] = splitProps(props, ['children', 'id', 'tag']);

  onMount(() => {
    addSection(getSectionString(local.children), local.id ?? '', getSectionDepth(local.tag));
  });

  return (
    <Dynamic
      component={local.tag}
      classList={{
        [styles.text]: true,
        [styles.h2]: local.tag === 'h2',
        [styles.h3]: local.tag === 'h3',
        [styles.h4]: local.tag === 'h4',
        [styles.h5]: local.tag === 'h5',
        [styles.h6]: local.tag === 'h6',
      }}
      {...others}>
      {local.children}
      <span class={styles.anchor} id={local.id} ref={obRef} />
      {
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={`#${local.id}`}
          class={styles.anchorContent}
          aria-label="Permalink for this section"
        />
      }
    </Dynamic>
  );
};

const getSectionString = (children: unknown) => {
  if (typeof children == 'string') {
    return children as string;
  }
  if (children instanceof Element) {
    const e = document.createElement('textarea');
    e.innerHTML = children.innerHTML;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue ?? '';
  }
  if (Array.isArray(children)) {
    let str = '';
    children.forEach((item) => (str += getSectionString(item)));
    return str;
  }
  return '';
};

const getSectionDepth = (tag: `h${2 | 3 | 4 | 5 | 6}`) => Number(tag.charAt(1));
