import { mergeProps } from 'solid-js';

/**
 * Deep clones the provided object.
 * Note: The object needs to be serializable or else this will throw a runtime error.
 *
 * @param obj The serializable object that needs to be deep cloned
 * @returns The deep cloned object
 * @throws {Error} if the object is not serializable
 */
export const deepCloneSerializableObject = <T extends object>(obj: T) =>
  typeof structuredClone !== typeof undefined
    ? structuredClone(obj)
    : (JSON.parse(JSON.stringify(obj)) as T);

/**
 * Merges two objects maintaining reactivity.
 *
 * @param source The source object
 * @param defaults The default values
 * @returns The merged object
 */
export const mergeDefaults = <T extends object>(source: T, defaults: Partial<T>) =>
  mergeProps(defaults, source);
