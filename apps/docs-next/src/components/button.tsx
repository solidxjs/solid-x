import { clsx } from 'clsx';
import { ComponentProps, splitProps } from 'solid-js';

export function Button(props: ComponentProps<'button'>) {
  const [localProps, others] = splitProps(props, ['children', 'class']);
  return (
    <button
      class={clsx(
        'nextra-button transition-all active:opacity-50',
        'bg-primary-700/5 border border-black/5 text-gray-600 hover:text-gray-900 rounded-md p-1.5',
        'dark:bg-primary-300/10 dark:border-white/10 dark:text-gray-400 dark:hover:text-gray-50',
        localProps.class
      )}
      {...others}
    >
      {localProps.children}
    </button>
  );
};
