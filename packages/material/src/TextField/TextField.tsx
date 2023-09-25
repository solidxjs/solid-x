import {
  JSX,
  JSXElement,
  Show,
  createEffect,
  createSignal,
  createUniqueId,
  untrack,
} from 'solid-js';
import { useComponentTheme } from '../theme/useComponentTheme';
import { mergeDefaults } from '../utils/object';
import { createControllableSignal } from '../utils/primitives';
import { Action, ChangePayload } from '../utils/type';
import { TextFieldTheme } from './__themes__/default/TextField.theme';

export type TextFieldProps = {
  /**
   * The initial value of the text field. This will be used when the component
   * is used in uncontrolled mode.
   */
  defaultValue?: string;

  /**
   * Whether or not the text field is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The leading content for the text field.
   */
  leadingContent?: JSXElement;

  /**
   * The label for the text field.
   */
  label?: string;

  /**
   * Maximum allowed characters for the input. Setting -1 indicates that there is no
   * limit.
   * @default -1
   */
  maxLength?: number;

  /**
   * Minimum allowed characters for the input. Setting -1 indicates that there is no
   * limit.
   * @default -1
   */
  minLength?: number;

  /**
   * The name of the text-field, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
   */
  name?: string;

  /**
   * Text that needs to be used as prefix for the text field.
   */
  prefixText?: string;

  /**
   * Whether or not the text field is readonly.
   * @default false
   */
  readonly?: boolean;

  /**
   * The status of the text field.
   */
  status?: 'error';

  /**
   * Text that needs to be used as suffix for the text field.
   */
  suffixText?: string;

  /**
   * The supporting text for the text field. Use this to provide additional information
   * about the text field.
   */
  supportingText?: string;

  /**
   * The trailing content for the text field.
   */
  trailingContent?: JSXElement;

  /**
   * The value of the text field. This will be used when the component is used in
   * controlled mode.
   */
  value?: string;

  /**
   * The variant of the text field.
   * @default 'filled'
   */
  variant?: 'filled';

  /**
   * The callback to call when the value of the text field is committed.
   * @param payload The payload containing the previous value and the current value of the component.
   */
  onChange?: Action<ChangePayload<string>>;

  /**
   * The callback to call when the value of the text field is changed. For controlled components, the
   * parent component should hook to this event and push back the value.
   * @param payload The payload containing the previous value and the current value of the component.
   */
  onInput?: Action<ChangePayload<string>>;
};

export const TextField = (_props: TextFieldProps) => {
  const defaultId = `textField-${createUniqueId()}`;
  const props = mergeDefaults(_props, {
    variant: 'filled',
  });
  const { classes, customThemeStyles, styles } = useComponentTheme(
    TextFieldTheme,
    () => props.variant,
    () =>
      ({
        state: props.disabled ? 'disabled' : 'enabled',
        status: props.status ?? 'default',
        variant: props.variant,
      }) as const,
  );
  const [value, setValue] = createControllableSignal({
    defaultValue: () => props.defaultValue,
    value: () => props.value,
    onChange: (payload) => {
      untrack(() => {
        props.onInput?.(payload);
      });
    },
  });
  const [hasValue, setHasValue] = createSignal(!!value());

  createEffect(() => {
    setHasValue(!!value());
  });

  const onChange: JSX.ChangeEventHandler<HTMLInputElement, Event> = (event) => {
    untrack(() => {
      props.onChange?.({
        previousValue: value(),
        value: event.target.value,
      });
    });
  };
  const onInput: JSX.InputEventHandler<HTMLInputElement, InputEvent> = (event) => {
    untrack(() => {
      setValue(event.target.value);
      // Workaround for controlled components
      event.target.value = value() ?? '';
    });
  };

  return (
    <div
      class={classes()}
      style={customThemeStyles()}
      data-sx-populated={hasValue()}
      data-sx-with-leading={!!props.leadingContent}
      data-sx-with-trailing={!!props.trailingContent}>
      <div class={styles().fieldContainer}>
        <div class={styles().backgroundLayer} />
        <div class={styles().stateLayer} />
        <Show when={props.leadingContent}>
          <div class={`${styles().content} ${styles().sideContent} ${styles().leadingContent}`}>
            {props.leadingContent}
          </div>
        </Show>
        <div class={`${styles().content} ${styles().mainContent}`}>
          <label for={defaultId} class={styles().label}>
            {props.label}
          </label>
          <div class={styles().inputWrapper}>
            <Show when={props.prefixText}>
              <span class={`${styles().affix} ${styles().prefix}`}>{props.prefixText}</span>
            </Show>
            <input
              id={defaultId}
              name={props.name}
              class={styles().input}
              disabled={props.disabled}
              readonly={props.readonly}
              value={value() ?? ''}
              onChange={onChange}
              onInput={onInput}
              maxLength={props.maxLength}
              minLength={props.minLength}
              aria-describedby={`${defaultId}_description`}
              aria-invalid={props.status === 'error'}
            />
            <Show when={props.suffixText}>
              <span class={`${styles().affix} ${styles().suffix}`}>{props.suffixText}</span>
            </Show>
          </div>
        </div>
        <Show when={props.trailingContent}>
          <div class={`${styles().content} ${styles().sideContent} ${styles().trailingContent}`}>
            {props.trailingContent}
          </div>
        </Show>
        <div class={styles().activeIndicator} />
      </div>
      <div id={`${defaultId}_description`} class={styles().supportingText}>
        {props.supportingText}
        <Show when={props.maxLength ?? -1 >= 0}>
          <span class={styles().counter}>
            {value()?.length ?? 0}/{props.maxLength}
          </span>
        </Show>
      </div>
    </div>
  );
};
