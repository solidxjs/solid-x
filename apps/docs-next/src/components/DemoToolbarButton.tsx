import { JSXElement } from 'solid-js';

type Props = {
  children: JSXElement | string;
  title?: string;
  onClick?: () => void;
};
export const DemoToolbarButton = (props: Props) => {
  return (
    <button
      class="
        inline-flex
        items-center
        justify-center
        rounded-[50%]
        cursor-pointer
        select-none
        p-1
        bg-transparent
        transition-colors
        text-[var(--sx-demo-button-text-color)]
        hover:text-[var(--sx-demo-button-hover-text-color)]
        hover:bg-[var(--sx-demo-button-hover-background-color)]
      "
      onClick={props.onClick}
      title={props.title}
      aria-label={props.title}>
      {props.children}
    </button>
  );
};
