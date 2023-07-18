import { useCallback, useInsertionEffect, useRef } from 'react';


/**
 * A polyfill for react's experimental_useEffectEvent
 * See https://react.dev/reference/react/experimental_useEffectEvent
 *
 * @param callback The event function that needs to be wrapped
 * @returns A non-reactive function that always “sees” the latest values of your props and state.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function useEffectEvent<T extends Function>(callback: T): T {
  const fnRef = useRef<T>(callback);
  
  useInsertionEffect(() => {
    fnRef.current = callback;
  }, [callback]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useCallback<any>((...args: any[]) => {
    return fnRef.current.apply(null, args);
  }, []);
}
