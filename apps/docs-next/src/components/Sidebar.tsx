import clsx from 'clsx';
import { ComponentProps, For, Match, Switch, createMemo, createSignal, splitProps } from 'solid-js';
import { useLocation } from 'solid-start';
import { Category, Header, Page } from '~/root.types';
import { Collapse } from './Collapse';
import { ChevronRight } from './Icons';
import { useNavigationStateContext } from './context/NavigationStateContext';
import { Link } from '@solidjs/router';
import { Anchor } from './Anchor';

const classes = {
  link: clsx(
    'flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word]',
    'cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border'
  ),
  inactive: clsx(
    'text-gray-500 hover:bg-gray-100 hover:text-gray-900',
    'dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50',
    'contrast-more:text-gray-900 contrast-more:dark:text-gray-50',
    'contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50'
  ),
  active: clsx(
    'bg-primary-100 font-semibold text-primary-800 dark:bg-primary-400/10 dark:text-primary-600',
    'contrast-more:border-primary-500 contrast-more:dark:border-primary-500'
  )
};

const SidebarCategory = (props: { item: Category }) => {
  const [isOpen, setIsOpen] = createSignal(true);

  return (
    <li>
      <button
        class={clsx(
          'flex rounded-sm items-center justify-between w-full p-2',
          classes.inactive
        )}
        onClick={() => setIsOpen(value => !value)}
      >
        {props.item.title}
        <ChevronRight
          height={24}
          width={24}
          class={clsx(
            'rounded-sm p-0.5 transition-transform',
            isOpen() && 'rotate-90'
          )}
        />
      </button>
      <Collapse isOpen={isOpen()}>
        <ul class="ms-3 border-s border-s-gray-200 dark:border-s-neutral-800 ps-3">
          <For each={props.item.links}>
            {(item) => (
              <Switch>
                <Match when={item.type === 'category'}>
                  <SidebarCategory item={item as Category} />
                </Match>
                <Match when={item.type === 'page'}>
                  <SidebarPage item={item as Page} />
                </Match>
              </Switch>
            )}
          </For>
        </ul>
      </Collapse>
    </li>
  );
};

const SidebarHeader = (props: { item: Header }) => (
  <li class="font-sm font-medium text-gray-900 dark:text-gray-100 mt-5 mb-2 p-2">
    <h2 class="cursor-default">{props.item.title}</h2>
  </li>
);

const SidebarPage = (props: { item: Page }) => {
  const location = useLocation();
  const isCurrent = createMemo(() => props.item.href.includes(location.pathname));
  const isExternal = createMemo(() => /^https:\/\/|http:\/\//i.test(props.item.href));
  return (
    (
      <li class="flex flex-col">
        {
          isExternal() ?
            (
              <Anchor
                class={clsx(
                  classes.link,
                  classes.inactive
                )}
                href={props.item.href}
                newWindow
              >
                {props.item.title}
              </Anchor>
            ) :
            (
              <Link
                class={clsx(
                  classes.link,
                  isCurrent() ? classes.active : classes.inactive
                )}
                href={props.item.href}
              >
                {props.item.title}
              </Link>
            )
        }
      </li>
    )
  );
};

export const Sidebar = (props: ComponentProps<'aside'>) => {
  const [local, others] = splitProps(props, ['class']);
  const navigationState = useNavigationStateContext();

  return (
    <aside class={clsx(local.class, 'h-full min-w-[250px] overflow-y-auto')} {...others}>
      <nav>
        {
          props.children && (
            <ul class="border-b border-b-black/20 dark:border-white/20 pb-8 mb-8">
              {props.children}
            </ul>
          )
        }
        <ul class="flex flex-col gap-1">
          <For each={navigationState.sections()}>
            {(item) => (
              <Switch>
                <Match when={item.type === 'category'}>
                  <SidebarCategory item={item as Category} />
                </Match>
                <Match when={item.type === 'header'}>
                  <SidebarHeader item={item as Header} />
                </Match>
                <Match when={item.type === 'page'}>
                  <SidebarPage item={item as Page} />
                </Match>
              </Switch>
            )}
          </For>
        </ul>
      </nav>
    </aside>
  );
};
