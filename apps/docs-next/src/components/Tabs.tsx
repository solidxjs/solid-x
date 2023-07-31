import { Tabs as _Tabs } from '@kobalte/core';
import { clsx } from 'clsx';
import { ComponentProps, ParentComponent, splitProps } from 'solid-js';

type TabsComposite = {
  List: typeof _Tabs.List;
  Trigger: typeof _Tabs.Trigger;
  Content: typeof _Tabs.Content;
};

export const Tabs: ParentComponent<ComponentProps<typeof _Tabs.Root>> &
  TabsComposite = props => {
    const [local, others] = splitProps(props, ['class']);

    return (
      <_Tabs.Root
        class={clsx(
          'kb-tabs-snippets not-prose my-6 overflow-y-auto rounded-lg border border-solid border-gray-200 bg-[#fafafa] dark:bg-[#27272a] dark:border-[#3f3f46]',
          local.class
        )}
        {...others}
      />
    );
  };

Tabs.List = (props: ComponentProps<typeof Tabs.List>) => {
  const [local, others] = splitProps(props, ['children', 'class']);

  return (
    <_Tabs.List
      class={clsx('relative border-b border-gray-300 dark:border-gray-700', local.class)}
      {...others}
    >
      {local.children}
      <_Tabs.Indicator class="absolute bottom-[-1px] h-0.5 bg-sky-600 transition-all" />
    </_Tabs.List>
  );
};

Tabs.Trigger = (props: ComponentProps<typeof Tabs.Trigger>) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <_Tabs.Trigger
      class={clsx(
        'outline-none text-sm px-3 py-2 text-gray-700 ui-selected:font-medium focus-visible:bg-gray-200 dark:text-white/80 dark:focus-visible:bg-gray-700',
        local.class
      )}
      {...others}
    />
  );
};

Tabs.Content = _Tabs.Content;
