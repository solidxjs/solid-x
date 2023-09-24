import clsx from 'clsx';
import { ComponentProps, For, Match, Switch, createSignal, splitProps } from 'solid-js';
import { A as Link, useLocation } from 'solid-start';
import { Category, Header, Page, Section } from '~/root.types';
import sharedStyles from '~/shared/shared.module.scss';
import { Anchor } from '../Anchor';
import { Collapse } from '../Collapse';
import { ChevronRight } from '../Icons';
import styles from './Sidebar.module.scss';

const SidebarCategory = (props: { item: Category }) => {
  const [isOpen, setIsOpen] = createSignal(true);

  return (
    <li class={styles.sidebarItemCategory}>
      <button
        class={`${styles.sidebarItemButtonCategory} ${sharedStyles.link} ${sharedStyles.linkInactive}`}
        onClick={() => setIsOpen((value) => !value)}>
        {props.item.title}
        <ChevronRight
          height={24}
          width={24}
          classList={{
            [styles.sidebarChevron]: true,
            [styles.sidebarChevronOpen]: isOpen(),
          }}
        />
      </button>
      <Collapse isOpen={isOpen()}>
        <ul class={styles.sidebarContentCategory}>
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
  <li class={styles.sidebarItemHeader}>
    <h2>{props.item.title}</h2>
  </li>
);

const SidebarPage = (props: { item: Page }) => {
  const location = useLocation();
  const isCurrent = () => props.item.href.includes(location.pathname);
  const isExternal = () => /^https:\/\/|http:\/\//i.test(props.item.href);
  return (
    <li class={styles.sidebarItemPage}>
      {isExternal() ? (
        <Anchor
          class={clsx(styles.sidebarLink, sharedStyles.link, sharedStyles.linkInactive)}
          href={props.item.href}
          newWindow>
          {props.item.title}
        </Anchor>
      ) : (
        <Link
          class={clsx(
            styles.sidebarLink,
            sharedStyles.link,
            isCurrent() ? sharedStyles.linkActive : sharedStyles.linkInactive,
          )}
          href={props.item.href}>
          {props.item.title}
        </Link>
      )}
    </li>
  );
};

export const Sidebar = (props: ComponentProps<'aside'> & { sections: Section[] }) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <aside class={`${local.class} ${styles.sidebar}`} {...others}>
      <nav>
        {props.children}
        <ul class={styles.sidebarList}>
          <For each={props.sections}>
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
