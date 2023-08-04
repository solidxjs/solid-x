import { ConfigColorMode, Select, useColorMode } from '@kobalte/core';
import { JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { MoonIcon, SunIcon, SystemIcon } from './Icons';

interface ThemeOption {
  value: ConfigColorMode;
  label: string;
  icon: () => JSX.Element;
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    value: 'light',
    label: 'Light',
    icon: () => <SunIcon class="h-5 w-5" />,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: () => <MoonIcon class="h-5 w-5" />,
  },
  {
    value: 'system',
    label: 'System',
    icon: () => <SystemIcon class="h-5 w-5" />,
  },
];

export const ThemeSelector = () => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Select.Root<ThemeOption>
      options={THEME_OPTIONS}
      optionValue="value"
      optionTextValue="label"
      defaultValue={THEME_OPTIONS.find(option => option.value === colorMode())}
      onChange={option => setColorMode(option.value)}
      gutter={8}
      sameWidth={false}
      placement="bottom"
      itemComponent={props => (
        <Select.Item
          item={props.item}
          class="flex items-center space-x-2 px-3 py-1 text-sm outline-none ui-highlighted:text-blue-700 ui-highlighted:bg-gray-200 transition-colors cursor-default dark:ui-selected:text-sky-400 dark:ui-highlighted:bg-gray-800"
        >
          {props.item.rawValue.icon()}
          <Select.ItemLabel>{props.item.rawValue.label}</Select.ItemLabel>
        </Select.Item>
      )}
    >
      <Select.Trigger
        aria-label="toggle color mode"
        class="min-w-[20px] md:min-w-[90px] flex p-2.5 rounded-md cursor-pointer items-center justify-center transition text-gray-600 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800"
      >
        <Select.Value<ThemeOption>>
          {({ selectedOptions }) => (
            <span class="flex items-center gap-1">
              <Dynamic
                component={THEME_OPTIONS.find(i => i.value === colorMode())?.icon}
              />
              <span class="text-sm hidden md:inline">
                {selectedOptions()[0].label}
              </span>
            </span>
          )}
        </Select.Value>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content class="bg-white border border-gray-300 rounded shadow-md py-1 z-50 dark:text-gray-300 dark:bg-dark dark:border-white/20 dark:shadow-none">
          <Select.Listbox />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
