/**
 * Joins an array omitting the falsy values.
 *
 * For example:
 * joinTruthy(['a', null, 'b', undefined, false, 'c']); // returns 'a b c'
 * joinTruthy(['a', null, 'b', undefined, false, 'c'], ','); // returns 'a,b,c'
 *
 * @param items The items to be joined
 * @param sep The separator to be used
 * @returns The joined string
 */
export const joinTruthy = <T>(items: (T | null | undefined | false)[], sep = ' ') =>
  items.filter(Boolean).join(sep);
