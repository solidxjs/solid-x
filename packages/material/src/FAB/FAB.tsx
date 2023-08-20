import { JSX, JSXElement, createMemo, splitProps } from 'solid-js';
import { ButtonBase } from '../ButtonBase';
import { useComponentTheme } from '../theme/useComponentTheme';
import { mergeDefaults } from '../utils/object';
import { FABTheme } from './__themes__/default/FAB.theme';

export type FABProps = {
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
  elevation?: 'default' | 'lowered';

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
   * The size of the FAB. Note that this only affects the size of the component
   * if it is rendered as a regular FAB (i.e. no text provided).
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Specifies the visual variant of the button to use.
   * @default 'surface'
   */
  variant?: 'surface' | 'primary' | 'secondary' | 'tertiary';

  /**
   * Specifies the callback to call when an action is performed on the button. This
   * is either a pointer interaction like a click or keyboard interaction like pressing
   * Enter or Space.
   *
   * @param event The event object of the event that triggered the onAction
   */
  onAction?: (event: Event) => void;
};

export const FAB = (_props: FABProps) => {
  const props = mergeDefaults(_props, {
    elevation: 'default',
    iconPosition: 'leading',
    size: 'medium',
    variant: 'surface',
  });
  const [localProps, passThroughProps] = splitProps(props, [
    'children',
    'elevation',
    'icon',
    'iconPosition',
    'size',
    'variant',
  ]);

  const { classes, customThemeStyles, styles } = useComponentTheme(
    FABTheme,
    () => localProps.variant,
    {
      get elevation() {
        return localProps.elevation;
      },
      get icon() {
        return localProps.iconPosition;
      },
      get size() {
        return localProps.size;
      },
      get type() {
        return localProps.children ? 'extended' : 'regular';
      },
      get variant() {
        return localProps.variant;
      },
    },
  );

  const buttonIcon = createMemo(
    () =>
      localProps.icon && (
        <span
          aria-hidden={passThroughProps.ariaLabel || localProps.children ? 'true' : 'false'}
          class={styles().icon}>
          {localProps.icon}
        </span>
      ),
  );

  return (
    <ButtonBase {...passThroughProps} class={classes()} style={customThemeStyles()}>
      {localProps.iconPosition === 'leading' && buttonIcon()}
      {localProps.children}
      {localProps.iconPosition === 'trailing' && buttonIcon()}
    </ButtonBase>
  );
};
