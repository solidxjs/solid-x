import { StyleRule } from '@vanilla-extract/css';

/**
 * A type used for specifying the variant maps for a component.
 */
export type VariantMap<T extends string> = Record<T, StyleRule>;
