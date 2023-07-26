import { Component, JSX, JSXElement, createMemo, splitProps } from 'solid-js';
import { ButtonBase } from '../ButtonBase';
import { mergeDefaults } from '../utils/object';
import * as styles from './__styles__/IconButton.styles.css';
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
   * The icon to be displayed in the button.
   */
  children?: JSXElement;

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
   * The selected state of the button.
   * @default 'false'
   */
  selected?: boolean;

  /**
   * An optional icon to be used for the selected state. If no icon is provided
   * the default icon provided as a child will be used.
   */
  selectedIcon?: JSXElement;

  /**
   * Where to display the linked `href` URL for a link button. For example
   * pass `_blank` to open the link in a new tab.
   */
  target?: string;

  /**
   * When true the button will toggle between selected and unselected states.
   * @default 'false'
   */
  toggle?: boolean;

  /**
   * Specifies the visual variant of the button to use.
   * @default 'standard'
   */
  variant?: styles.StyleVariant;

  /**
   * Specifies the callback to call when an action is performed on the button. This
   * is either a pointer interaction like a click or keyboard interaction like pressing
   * Enter or Space.
   *
   * @param event The event object of the event that triggered the onAction
   */
  onAction?: (event: Event) => void;

  /**
   * Specifies the callback to call when the Icon Button can be toggled between selected
   * states.
   *
   * @param isSelected The next selection state.
   */
  onSelectionChange?: (isSelected: boolean) => void;
};

export const IconButton: Component<ButtonProps> = (_props) => {
  const props = mergeDefaults(_props, {
    disabled: false,
    selected: false,
    toggle: false,
    variant: 'standard',
  });
  const [localProps, passThroughProps] = splitProps(props, [
    'children',
    'onAction',
    'onSelectionChange',
    'selected',
    'selectedIcon',
    'toggle',
    'variant',
  ]);
  const rootClass = createMemo(() =>
    styles.iconButton({
      selection: localProps.toggle ? (localProps.selected ? 'selected' : 'unselected') : 'default',
      variant: localProps.variant,
    }),
  );

  const handleOnAction = (event: Event) => {
    // if the button can be toggled, trigger onSelectionChange
    if (localProps.toggle) {
      // invert the current selection for payload
      localProps.onSelectionChange?.(!localProps.selected);
    }
    // trigger onAction on all cases
    localProps.onAction?.(event);
  };

  return (
    <ButtonBase class={rootClass()} onAction={handleOnAction} {...passThroughProps}>
      {localProps.toggle && localProps.selected && localProps.selectedIcon
        ? localProps.selectedIcon
        : localProps.children}
    </ButtonBase>
  );
};

export default IconButton;
