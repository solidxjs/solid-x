import { clsx } from 'clsx';
import { JSXElement } from 'solid-js';
import { mergeDefaults } from '~/utils';

const TypeToEmoji = {
  default: '💡',
  error: '🚫',
  info: 'ℹ',
  warning: '😀',
};

type CalloutType = keyof typeof TypeToEmoji;

const classes: Record<CalloutType, string> = {
  default: clsx(
    'border-orange-100 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-300',
  ),
  error: clsx(
    'border-red-200 bg-red-100 text-red-900 dark:border-red-200/30 dark:bg-red-900/30 dark:text-red-200',
  ),
  info: clsx(
    'border-blue-200 bg-blue-100 text-blue-900 dark:border-blue-200/30 dark:bg-blue-900/30 dark:text-blue-200',
  ),
  warning: clsx(
    'border-yellow-100 bg-yellow-50 text-yellow-900 dark:border-yellow-200/30 dark:bg-yellow-700/30 dark:text-yellow-200',
  ),
};

type CalloutProps = {
  type?: CalloutType;
  emoji?: string | JSXElement;
  children: JSXElement;
};

export const Callout = (props: CalloutProps) => {
  const localProps = mergeDefaults(props, { type: 'default', emoji: TypeToEmoji['default'] });
  return (
    <div
      class={clsx(
        'overflow-x-auto mt-6 flex rounded-lg border py-2 px-2 items-center gap-2',
        'contrast-more:border-current contrast-more:dark:border-current',
        classes[localProps.type],
      )}>
      <div
        class="select-none text-xl ltr:pl-3 ltr:pr-2 rtl:pr-3 rtl:pl-2"
        style={{
          'font-family': '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}>
        {localProps.emoji}
      </div>
      <div class="w-full min-w-0 leading-7">{localProps.children}</div>
    </div>
  );
};
