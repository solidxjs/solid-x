import { JSX, JSXElement } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { joinTruthy } from '../utils/array';
import { mergeDefaults } from '../utils/object';
import * as styles from './__themes__/ButtonBase.styles.css';

type NativeButtonProps = JSX.HTMLAttributes<'button'>;

export type ButtonBaseProps = {
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
   * Inline styles for the button component.
   */
  style?: NativeButtonProps['style'];

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

export const ButtonBase = (_props: ButtonBaseProps) => {
  const props = mergeDefaults(_props, {
    disabled: false,
  });

  return (
    <Dynamic
      component={props.href ? 'a' : 'button'}
      class={joinTruthy([styles.base, props.class])}
      // Link buttons may not be disabled
      disabled={props.disabled && !props.href}
      href={props.href ? props.href : undefined}
      onClick={(event: Event) => props.onAction?.(event)}
      style={props.style}
      // Target is only applicable for Link buttons
      target={props.href ? props.target : undefined}
      // Link buttons do not have type
      type={!props.href ? props.type : undefined}>
      {props.children}
    </Dynamic>
  );
};
