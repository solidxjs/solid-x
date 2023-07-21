import { Component } from 'solid-js';
import * as styles from './__styles__/Badge.styles.css';

type BadgeProps = {
  /**
   * The content that will be shown in the badge.
   * Note: The content will only be shown in the 'standard' variant.
   */
  children?: string;

  /**
   * The variant of the badge.
   * @default 'standard'
   */
  variant?: styles.Variants;
};

export const Badge: Component<BadgeProps> = ({ children, variant = 'standard' }) => (
  <span class={styles.variants[variant]} role="presentation">
    {variant === 'standard' && <span class={styles.text}>{children}</span>}
  </span>
);

export default Badge;
