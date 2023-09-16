import { Accessor, createMemo, createSignal } from 'solid-js';
import { ChangePayload, MaybeAccessor } from '../type';

type ControllableSignalOptions<T> = {
  /**
   * The initial value of the uncontrolled component.
   */
  defaultValue?: MaybeAccessor<T | undefined>;

  /**
   * The value of the controlled component.
   */
  value?: MaybeAccessor<T | undefined>;

  /**
   * A callback method for notifying value changes.
   */
  onChange?: (payload: ChangePayload<T>) => void;
};

/**
 * Creates a controllable reactive signal with getter and setter.
 * @param options The options for creating the controllable signal.
 * @returns The getter and setter for the reactive signal.
 */
export function createControllableSignal<T>(options: ControllableSignalOptions<T>) {
  const [_value, _setValue] = createSignal(extractValue(options.defaultValue));
  const isControlled = createMemo(() => extractValue(options.value) !== undefined);
  const value = createMemo(() => (isControlled() ? extractValue(options.value) : _value()));
  const setValue = (next: T | ((prev: T | undefined) => T)) => {
    const previousValue = value();
    const nextValue = evaluateValue(next, value());
    if (!Object.is(nextValue, value())) {
      // set the internal signal for uncontrolled signal
      if (!isControlled()) {
        // FIXME: Need to check how to get the typings correct
        _setValue(nextValue as never);
      }
      options.onChange?.({
        previousValue,
        // FIXME: Need to check how to get the typings correct
        value: nextValue as never,
      });
    }
  };
  return [value, setValue] as const;
}

/**
 * If the value is a function, evaluate it and return the result. Otherwise
 * return the value directly.
 * @param valueOrFunction A function or a direct value.
 * @param args The arguments for calling the function, if provided one.
 * @returns The direct value or the return value of the function.
 */
function evaluateValue<T>(
  valueOrFunction: T,
  ...args: T extends (...args: never[]) => unknown ? Parameters<T> : never
): T extends (...args: never[]) => unknown ? ReturnType<T> : T {
  return typeof valueOrFunction === 'function' ? valueOrFunction(...args) : valueOrFunction;
}

/**
 * Extracts value from an accessor or returns the direct value.
 * @param value The direct value or an accessor.
 * @returns The direct or extracted value.
 */
function extractValue<T>(value: MaybeAccessor<T>) {
  return isAccessor(value) ? value() : value;
}

/**
 * Checks if the value is an accessor.
 * @param value The value to be tested.
 * @returns true if the value is an accessor, false otherwise
 */
function isAccessor<T>(value: unknown): value is Accessor<T> {
  return typeof value === 'function';
}
