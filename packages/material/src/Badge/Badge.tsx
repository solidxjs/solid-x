import { useComponentTheme } from '../theme/useComponentTheme';
import { mergeDefaults } from '../utils/object';
import { BadgeTheme } from './__themes__/default/Badge.theme';

export type BadgeProps = {
  /**
   * The content that will be shown in the badge.
   * Note: The content will only be shown in the 'large' variant.
   */
  children?: string;

  /**
   * The variant of the badge.
   * @default 'large'
   */
  variant?: 'small' | 'large';
};

export const Badge = (_props: BadgeProps) => {
  const props = mergeDefaults(_props, { variant: 'large' });
  const { classes, customThemeStyles, styles } = useComponentTheme(
    BadgeTheme,
    () => props.variant,
    () => ({
      variant: props.variant,
    }),
  );
  return (
    <span class={classes()} role="presentation" style={customThemeStyles()}>
      {props.variant === 'large' && <span class={styles().text}>{props.children}</span>}
    </span>
  );
};
