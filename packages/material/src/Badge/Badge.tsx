import { Component } from 'solid-js';
import * as styles from './__styles__/Badge.styles.css';
import { mergeDefaults } from '../utils/object';

type BadgeProps = {
  /**
   * The content that will be shown in the badge.
   * Note: The content will only be shown in the 'large' variant.
   */
  children?: string;

  /**
   * The variant of the badge.
   * @default 'large'
   */
  variant?: styles.StyleVariant;
};

export const Badge: Component<BadgeProps> = (_props) => {
  const props = mergeDefaults(_props, { variant: 'large' });
  return (
    <span class={styles.badge({ variant: props.variant })} role="presentation">
      {props.variant === 'large' && <span class={styles.text}>{props.children}</span>}
    </span>
  );
};

export default Badge;
