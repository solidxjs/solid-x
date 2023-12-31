import { JSX, JSXElement, createMemo, splitProps } from 'solid-js';
import { ButtonBase } from '../ButtonBase';
import { useComponentTheme } from '../theme/useComponentTheme';
import { mergeDefaults } from '../utils/object';
import { ButtonTheme } from './__themes__/default/Button.theme';

export type ButtonProps = {
  /**
   * The value for setting aria-expanded attribute.
   */
  ariaExpanded?: JSX.AriaAttributes['aria-expanded'];

  /**
   * The value for setting aria-haspopup attribute.
   */
  ariaHasPopup?: JSX.AriaAttributes['aria-haspopup'];

  /**
   * The value for setting aria-label attribute.
   */
  ariaLabel?: JSX.AriaAttributes['aria-label'];

  /**
   * The text to be shown in the button.
   */
  children?: string;

  /**
   * Whether or not the button is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The URL that the link button points to.
   */
  href?: string;

  /**
   * The icon to be displayed in the button.
   */
  icon?: JSXElement;

  /**
   * Whether to render the icon at the inline start or inline end
   * of the label
   * @default 'leading'
   */
  iconPosition?: 'leading' | 'trailing';

  /**
   * Where to display the linked `href` URL for a link button. For example
   * pass `_blank` to open the link in a new tab.
   */
  target?: string;

  /**
   * Specifies the type of the button, mainly for controlling forms. Setting
   * this to `submit` will submit the containing form; `reset` will reset the
   * form.
   */
  type?: 'submit' | 'reset';

  /**
   * Specifies the visual variant of the button to use.
   * @default 'outlined'
   */
  variant?: 'elevated' | 'filled' | 'filledTonal' | 'outlined' | 'text';

  /**
   * Specifies the callback to call when an action is performed on the button. This
   * is either a pointer interaction like a click or keyboard interaction like pressing
   * Enter or Space.
   *
   * @param event The event object of the event that triggered the onAction
   */
  onAction?: (event: Event) => void;
};

export const Button = (_props: ButtonProps) => {
  const props = mergeDefaults(_props, {
    disabled: false,
    iconPosition: 'leading',
    variant: 'outlined',
  });
  const [localProps, passThroughProps] = splitProps(props, [
    'children',
    'icon',
    'iconPosition',
    'variant',
  ]);
  const { classes, customThemeStyles, styles } = useComponentTheme(
    ButtonTheme,
    () => localProps.variant,
    () => ({
      icon: localProps.icon != null ? localProps.iconPosition : ('none' as const),
      variant: localProps.variant,
    }),
  );
  const buttonIcon = createMemo(
    () => localProps.icon && <span class={styles().icon}>{localProps.icon}</span>,
  );

  return (
    <ButtonBase class={classes()} style={customThemeStyles()} {...passThroughProps}>
      {localProps.iconPosition === 'leading' && buttonIcon()}
      {localProps.children}
      {localProps.iconPosition === 'trailing' && buttonIcon()}
    </ButtonBase>
  );
};
