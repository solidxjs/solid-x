import { Tabs as _Tabs } from '@kobalte/core';
import { clsx } from 'clsx';
import { ComponentProps, ParentComponent, splitProps } from 'solid-js';
import styles from './Tabs.module.scss';

type TabsComposite = {
  List: typeof _Tabs.List;
  Trigger: typeof _Tabs.Trigger;
  Content: typeof _Tabs.Content;
};

export const Tabs: ParentComponent<ComponentProps<typeof _Tabs.Root>> & TabsComposite = (props) => {
  const [local, others] = splitProps(props, ['class']);
  return <_Tabs.Root class={clsx(styles.tabs, local.class)} {...others} />;
};

Tabs.List = (props: ComponentProps<typeof _Tabs.List>) => {
  const [local, others] = splitProps(props, ['children', 'class']);

  return (
    <_Tabs.List class={clsx(styles.tabsList, local.class)} {...others}>
      {local.children}
      <_Tabs.Indicator class={styles.tabsIndicator} />
    </_Tabs.List>
  );
};

Tabs.Trigger = (props: ComponentProps<typeof _Tabs.Trigger>) => {
  const [local, others] = splitProps(props, ['class']);

  return <_Tabs.Trigger class={clsx(styles.tabsTrigger, local.class)} {...others} />;
};

Tabs.Content = (props: ComponentProps<typeof _Tabs.Content>) => {
  const [local, others] = splitProps(props, ['class']);

  return <_Tabs.Content class={clsx(styles.tabsContent, local.class)} {...others} />;
};
