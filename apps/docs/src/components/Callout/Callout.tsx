import { clsx } from 'clsx';
import { JSXElement } from 'solid-js';
import { mergeDefaults } from '~/utils';
import styles from './Callout.module.scss';

const TypeToEmoji = {
  default: '💡',
  error: '🚫',
  info: 'ℹ',
  warning: '😀',
};

type CalloutType = keyof typeof TypeToEmoji;

type CalloutProps = {
  type?: CalloutType;
  emoji?: string | JSXElement;
  children: JSXElement;
};

export const Callout = (props: CalloutProps) => {
  const localProps = mergeDefaults(props, { type: 'default', emoji: TypeToEmoji['default'] });
  return (
    <div class={clsx(styles.container, styles[localProps.type])}>
      <div class={styles.icon}>{localProps.emoji}</div>
      <div class={styles.text}>{localProps.children}</div>
    </div>
  );
};
