import { Component, JSX, JSXElement } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import * as styles from './__styles__/ButtonBase.styles.css';
import { joinTruthy } from '../utils/array';

type ButtonBaseProps = {
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
   * The content to be shown in the button.
   */
  children?: JSXElement;

  /**
   * Style class to be set on the root element.
   */
  class?: string;

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
};

export const ButtonBase: Component<ButtonBaseProps> = ({
  children,
  class: propClass,
  disabled = false,
  href,
  target,
  type,
  onAction
}) => {
  // Link buttons may not be disabled
  const isDisabled = disabled && !href;
  const rootComponent = href ? 'a' : 'button';
  const onClickHandler = (event: Event) => onAction?.(event);
  const rootClass = joinTruthy([styles.base, propClass]);

  return (
    <Dynamic
      component={rootComponent}
      class={rootClass}
      disabled={isDisabled}
      href={href}
      onClick={onClickHandler}
      target={target}
      type={type}>
      {children}
    </Dynamic>
  );
};

export default ButtonBase;
