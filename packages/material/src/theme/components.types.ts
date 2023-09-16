import type { BadgeTokens } from '../Badge/__themes__/default/Badge.theme';
import type { ButtonTokens } from '../Button/__themes__/default/Button.theme';
import { FABTokens } from '../FAB/__themes__/default/FAB.theme';
import { IconButtonTokens } from '../IconButton/__themes__/default/IconButton.theme';
import { TextFieldTokens } from '../TextField/__themes__/default/TextField.theme';

type RuntimeTokens<T> = T extends object
  ? {
      [K in keyof T]?: RuntimeTokens<T[K]>;
    }
  : string;

export type ComponentsConfig = {
  Badge?: RuntimeTokens<BadgeTokens>;
  Button?: RuntimeTokens<ButtonTokens>;
  FAB?: RuntimeTokens<FABTokens>;
  IconButton?: RuntimeTokens<IconButtonTokens>;
  TextField?: RuntimeTokens<TextFieldTokens>;
};
