import { ReactElement } from 'react';

type Props = {
  children: ReactElement | string;
  title?: string;
  onClick?: () => void;
};
export const ToolbarButton = ({ children, title, onClick }: Props) => {
  return (
    <button
      className="
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
      onClick={onClick}
      title={title}
      aria-label={title}>
      {children}
    </button>
  );
};
