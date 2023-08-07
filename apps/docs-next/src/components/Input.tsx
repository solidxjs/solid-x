import { clsx } from 'clsx';
import { ComponentProps, JSXElement, splitProps } from 'solid-js';

type InputProps = ComponentProps<'input'> & { suffix?: JSXElement };

export const Input = (props: InputProps) => {
  const [local, rest] = splitProps(props, ['class', 'suffix']);
  return (
    <div class="relative flex items-center text-gray-900 contrast-more:text-gray-800 dark:text-gray-300 contrast-more:dark:text-gray-300">
      <input
        spellcheck={false}
        class={clsx(
          local.class,
          'block w-full appearance-none rounded-lg px-3 py-2 transition-colors',
          'text-base leading-tight md:text-sm',
          'bg-black/[.05] dark:bg-gray-50/10',
          'focus:bg-white dark:focus:bg-dark',
          'placeholder:text-gray-500 dark:placeholder:text-gray-400',
          'contrast-more:border contrast-more:border-current',
        )}
        {...rest}
      />
      {local.suffix}
    </div>
  );
};
