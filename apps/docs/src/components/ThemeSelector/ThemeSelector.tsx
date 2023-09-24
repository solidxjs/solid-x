import { ConfigColorMode, Select, useColorMode } from '@kobalte/core';
import { JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import sharedStyles from '~/shared/shared.module.scss';
import { MoonIcon, SunIcon, SystemIcon } from '../Icons';
import styles from './ThemeSelector.module.scss';

interface ThemeOption {
  value: ConfigColorMode;
  label: string;
  icon: () => JSX.Element;
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    value: 'light',
    label: 'Light',
    icon: () => <SunIcon height="1.25rem" width="1.25rem" />,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: () => <MoonIcon height="1.25rem" width="1.25rem" />,
  },
  {
    value: 'system',
    label: 'System',
    icon: () => <SystemIcon height="1.25rem" width="1.25rem" />,
  },
];

export const ThemeSelector = () => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Select.Root<ThemeOption>
      options={THEME_OPTIONS}
      optionValue="value"
      optionTextValue="label"
      defaultValue={THEME_OPTIONS.find((option) => option.value === colorMode())}
      onChange={(option) => setColorMode(option.value)}
      gutter={8}
      sameWidth={false}
      placement="bottom"
      itemComponent={(props) => (
        <Select.Item item={props.item} class={styles.selectItem}>
          {props.item.rawValue.icon()}
          <Select.ItemLabel>{props.item.rawValue.label}</Select.ItemLabel>
        </Select.Item>
      )}>
      <Select.Trigger
        aria-label="toggle color mode"
        class={`${styles.selectTrigger} ${sharedStyles.linkInactive}`}>
        <Select.Value<ThemeOption>>
          {({ selectedOptions }) => (
            <span class={styles.selectValueContainer}>
              <Dynamic component={THEME_OPTIONS.find((i) => i.value === colorMode())?.icon} />
              <span class={styles.selectValue}>{selectedOptions()[0].label}</span>
            </span>
          )}
        </Select.Value>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content class={styles.selectContent}>
          <Select.Listbox />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
