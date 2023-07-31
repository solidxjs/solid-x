import { type BadgeTokens } from '../Badge/__themes__/default/Badge.theme';

type RuntimeTokens<T> = T extends object
  ? {
      [K in keyof T]?: RuntimeTokens<T[K]>;
    }
  : string;

export type ComponentsConfig = {
  Badge?: RuntimeTokens<BadgeTokens>;
};
