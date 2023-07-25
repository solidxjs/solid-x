import { Component, JSX, JSXElement, createMemo, splitProps } from 'solid-js';
import { ButtonBase } from '../ButtonBase';
import * as styles from './__styles__/FAB.styles.css';
import './__theme__/theme.default.css';
import { mergeDefaults } from '../utils/object';

type FABProps = {
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
   * Whether to have the default elevation or to have it lowered.
   * @default 'default'
   */
  elevation?: styles.ElevationVariant;

  /**
   * The icon to be displayed in the button.
   */
  icon?: JSXElement;

  /**
   * Whether to render the icon at the inline start or inline end
   * of the label
   * @default 'leading'
   */
  iconPosition?: styles.IconVariant;

  /**
   * The size of the FAB. Note that this only affects the size of the component
   * if it is rendered as a regular FAB (i.e. no text provided).
   *
   * @default 'medium'
   */
  size?: styles.SizeVariant;

  /**
   * Specifies the visual variant of the button to use.
   * @default 'surface'
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
};

export const FAB: Component<FABProps> = (_props) => {
  const props = mergeDefaults(_props, {
    elevation: 'default',
    iconPosition: 'leading',
  });
  const [localProps, passThroughProps] = splitProps(props, [
    'children',
    'elevation',
    'icon',
    'iconPosition',
    'size',
    'variant',
  ]);
  const buttonIcon = createMemo(
    () =>
      localProps.icon && (
        <span
          aria-hidden={passThroughProps.ariaLabel || localProps.children ? 'true' : 'false'}
          class={styles.icon}>
          {localProps.icon}
        </span>
      ),
  );
  const rootClass = createMemo(() =>
    styles.fab({
      elevation: localProps.elevation,
      icon: localProps.iconPosition,
      size: localProps.size,
      type: localProps.children ? 'extended' : 'regular',
      variant: localProps.variant,
    }),
  );

  return (
    <ButtonBase {...passThroughProps} class={rootClass()}>
      {localProps.iconPosition === 'leading' && buttonIcon()}
      {localProps.children}
      {localProps.iconPosition === 'trailing' && buttonIcon()}
    </ButtonBase>
  );
};

export default FAB;
