import { clsx } from 'clsx';
import { JSXElement, createEffect } from 'solid-js';

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

    containerRef.classList.toggle('duration-500', !props.isOpen);
    containerRef.classList.toggle('duration-300', props.isOpen);

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
    <div
      ref={containerRef}
      class="transform-gpu overflow-hidden transition-all ease-in-out motion-reduce:transition-none">
      <div
        ref={innerRef}
        class={clsx(
          'transition-opacity duration-500 ease-in-out motion-reduce:transition-none',
          props.isOpen ? 'opacity-100' : 'opacity-0',
          props.class,
        )}>
        {props.children}
      </div>
    </div>
  );
};
