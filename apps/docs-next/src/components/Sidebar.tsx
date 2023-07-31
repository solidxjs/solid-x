import { Collapsible } from '@kobalte/core';
import clsx from 'clsx';
import { ComponentProps, For, Match, Switch, splitProps } from 'solid-js';
// import { useLocation } from 'solid-start';
import { Category, Header, Page } from '~/root.types';
import { useNavigationStateContext } from './context/NavigationStateContext';

const classes = {
  item: 'py-2 px-3 w-full',
  link: 'dark:text-gray-400 text-gray-600 dark:hover:bg-blue-800 hover:bg-blue-300',
  selected: '',
};

const SideBarCollection = (props: { item: Category }) => (
  <li>
    <Collapsible.Root>
      <Collapsible.Trigger>
        <span class={clsx(
          classes.item,
          classes.link
        )}>
          {props.item.title}
        </span>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <ul>
          <For each={props.item.links}>
            {(item) => (
              <Switch>
                <Match when={item.type === 'category'}>
                  <SideBarCollection item={item as Category} />
                </Match>
                <Match when={item.type === 'page'}>
                  <SideBarPage item={item as Page} />
                </Match>
              </Switch>
            )}
          </For>
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  </li>
);

const SideBarHeader = (props: { item: Header }) => (
  <li>
    <h2 class="font-medium dark:text-gray-300">{props.item.title}</h2>
  </li>
);

const SideBarPage = (props: { item: Page }) => (
  <li>
    <a class="dark:text-gray-400" href={props.item.href}>{props.item.title}</a>
  </li>
);

export const SideBar = (props: ComponentProps<'aside'>) => {
  const [local, others] = splitProps(props, ['class']);
  const navigationState = useNavigationStateContext();

  return (
    <aside class={clsx(local.class, 'h-full min-w-[250px]')} {...others}>
      <nav>
        <ul>
          <For each={navigationState.sections()}>
            {(item) => (
              <Switch>
                <Match when={item.type === 'category'}>
                  <SideBarCollection item={item as Category} />
                </Match>
                <Match when={item.type === 'header'}>
                  <SideBarHeader item={item as Header} />
                </Match>
                <Match when={item.type === 'page'}>
                  <SideBarPage item={item as Page} />
                </Match>
              </Switch>
            )}
          </For>
        </ul>
      </nav>
    </aside>
  );
};
