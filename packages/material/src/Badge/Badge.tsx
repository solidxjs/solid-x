import { Component } from 'solid-js';
import * as styles from './__styles__/Badge.styles.css';

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

export const Badge: Component<BadgeProps> = ({ children, variant = 'large' }) => (
  <span class={styles.badge({ variant })} role="presentation">
    {variant === 'large' && <span class={styles.text}>{children}</span>}
  </span>
);

export default Badge;
