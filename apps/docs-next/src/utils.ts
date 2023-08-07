import { mergeProps } from 'solid-js';

type DefaultAdded<Source extends object, Defaults extends Partial<Source>> = {
  [key in keyof (Source & Defaults)]: key extends keyof Source ? NonNullable<Source[key]> : never;
};

/**
 * Merges two objects maintaining reactivity.
 *
 * @param source The source object
 * @param defaults The default values
 * @returns The merged object
 */
export const mergeDefaults = <T extends object, const D extends Partial<T>>(
  source: T,
  defaults: D,
) => mergeProps(defaults, source) as DefaultAdded<T, D>;
