import { Component, JSX, JSXElement } from 'solid-js';
import { Dynamic } from 'solid-js/web';
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

  /**
   * Specifies the callback to call when an action is performed on the button. This
   * is either a pointer interaction like a click or keyboard interaction like pressing
   * Enter or Space.
   *
   * @param event The event object of the event that triggered the onAction
   */
  onAction?: (event: Event) => void;
} & styles.ButtonVariants;

export const Button: Component<ButtonProps> = ({
  children,
  disabled = false,
  href,
  // icon,
  // iconPosition = 'leading',
  target,
  type,
  variant,
  onAction
}) => {
  // Link buttons may not be disabled
  const isDisabled = disabled && !href;
  const rootComponent = href ? 'a' : 'button';
  const onClickHandler = (event: Event) => onAction?.(event);

  return (
    <Dynamic
      component={rootComponent}
      class={styles.button({ variant })}
      disabled={isDisabled}
      href={href}
      onClick={onClickHandler}
      target={target}
      type={type}>
      {children}
    </Dynamic>
  );
};

export default Button;
