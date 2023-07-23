import { Component, JSX, JSXElement } from 'solid-js';
import { ButtonBase } from '../ButtonBase';
import * as styles from './__styles__/Button.styles.css';
import './__theme__/theme.default.css';

type ButtonProps = {
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

export const Button: Component<ButtonProps> = ({
  ariaExpanded,
  ariaHasPopup,
  ariaLabel,
  children,
  disabled = false,
  href,
  icon,
  iconPosition = 'leading',
  target,
  type,
  variant,
  onAction
}) => {
  const buttonIcon = icon && <span class={styles.icon}>{icon}</span>;
  const rootClass = styles.button({
    icon: icon != null ? iconPosition : 'none',
    variant
  });

  return (
    <ButtonBase
      ariaExpanded={ariaExpanded}
      ariaHasPopup={ariaHasPopup}
      ariaLabel={ariaLabel}
      class={rootClass}
      disabled={disabled}
      href={href}
      onAction={onAction}
      target={target}
      type={type}>
      {iconPosition === 'leading' && buttonIcon}
      {children}
      {iconPosition === 'trailing' && buttonIcon}
    </ButtonBase>
  );
};

export default Button;
