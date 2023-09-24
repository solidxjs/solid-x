import { clsx } from 'clsx';
import { JSXElement, createEffect } from 'solid-js';
import styles from './Collapse.module.scss';

type Props = {
  children: JSXElement;
  class?: string;
  isOpen: boolean;
};

export const Collapse = (props: Props) => {
  let containerRef: HTMLDivElement | undefined;
  let innerRef: HTMLDivElement | undefined;
  let animation = 0;

  createEffect(() => {
    if (animation) {
      clearTimeout(animation);
    }

    if (!containerRef || !innerRef) return;

    containerRef.style.height = `${innerRef.clientHeight}px`;

    if (props.isOpen) {
      animation = window.setTimeout(() => {
        // should be style property in kebab-case, not css class name
        containerRef?.style.removeProperty('height');
      }, 300);
    } else {
      setTimeout(() => {
        containerRef && (containerRef.style.height = '0px');
      }, 0);
    }
  });

  return (
    <div ref={containerRef} class={styles.collapse}>
      <div
        ref={innerRef}
        class={clsx(
          styles.collapseContent,
          props.isOpen ? styles.collapseContentOpen : styles.collapseContentClose,
          props.class,
        )}>
        {props.children}
      </div>
    </div>
  );
};
