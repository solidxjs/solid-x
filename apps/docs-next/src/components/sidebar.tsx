import { Collapsible } from '@kobalte/core';
import clsx from 'clsx';
import { ComponentProps, For, Match, Switch, splitProps } from 'solid-js';
// import { useLocation } from 'solid-start';
import { CategoryMeta, HeaderMeta, PageMeta, SectionsMeta } from '~/root.types';

const classes = {
  item: 'py-2 px-3 w-full',
  link: 'dark:text-gray-400 text-gray-600 dark:hover:bg-blue-800 hover:bg-blue-300',
  selected: '',
};

type SideBarCollectionProps = {
  item: CategoryMeta;
};
const SideBarCollection = (props: SideBarCollectionProps) => (
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
                  <SideBarCollection item={item as CategoryMeta} />
                </Match>
                <Match when={item.type === 'page'}>
                  <SideBarPage item={item as PageMeta} />
                </Match>
              </Switch>
            )}
          </For>
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  </li>
);

type SideBarHeaderProps = {
  item: HeaderMeta;
};
const SideBarHeader = (props: SideBarHeaderProps) => (
  <li>
    <h2 class="font-medium dark:text-gray-300">{props.item.title}</h2>
  </li>
);

type SideBarPageProps = {
  item: PageMeta;
};
const SideBarPage = (props: SideBarPageProps) => (
  <li>
    <a class="dark:text-gray-400" href={props.item.href}>{props.item.title}</a>
  </li>
);

type SideBarProps = ComponentProps<'aside'> & {
  items?: SectionsMeta[];
};
export function SideBar(props: SideBarProps) {
  const [local, others] = splitProps(props, ['items', 'class']);
  // const location = useLocation();
  
  return (
    <aside class="h-full min-w-[250px]" {...others}>
      <nav>
        <ul>
          <For each={local.items}>
            {(item) => (
              <Switch>
                <Match when={item.type === 'category'}>
                  <SideBarCollection item={item as CategoryMeta} />
                </Match>
                <Match when={item.type === 'header'}>
                  <SideBarHeader item={item as HeaderMeta} />
                </Match>
                <Match when={item.type === 'page'}>
                  <SideBarPage item={item as PageMeta} />
                </Match>
              </Switch>
            )}
          </For>
        </ul>
      </nav>
    </aside>
  );
};
