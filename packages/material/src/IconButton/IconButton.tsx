import { JSX, JSXElement, splitProps } from 'solid-js';
import { ButtonBase } from '../ButtonBase';
import { useComponentTheme } from '../theme/useComponentTheme';
import { mergeDefaults } from '../utils/object';
import { IconButtonTheme } from './__themes__/default/IconButton.theme';

export type IconButtonProps = {
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
  variant?: 'filled' | 'filledTonal' | 'outlined' | 'standard';

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

export const IconButton = (_props: IconButtonProps) => {
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

  const { classes, customThemeStyles } = useComponentTheme(
    IconButtonTheme,
    () => localProps.variant,
    () => ({
      selection: localProps.toggle
        ? localProps.selected
          ? ('selected' as const)
          : ('unselected' as const)
        : ('default' as const),
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
    <ButtonBase
      class={classes()}
      onAction={handleOnAction}
      style={customThemeStyles()}
      {...passThroughProps}>
      {localProps.toggle && localProps.selected && localProps.selectedIcon
        ? localProps.selectedIcon
        : localProps.children}
    </ButtonBase>
  );
};
