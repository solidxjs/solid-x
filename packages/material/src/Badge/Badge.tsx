import { Component } from 'solid-js';
import { classNames } from '../utils/classNames';
import { containerStyles, textStyles, variantStyles } from './__styles__/Badge.style.css';

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
  variant?: 'dot' | 'standard';
};

const Badge: Component<BadgeProps> = ({ children, variant = 'standard' }) => (
  <span class={classNames([containerStyles, variantStyles[variant]])} role="presentation">
    {variant === 'standard' && <span class={textStyles}>{children}</span>}
  </span>
);

export default Badge;
