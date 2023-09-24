import { ParentProps, Show } from 'solid-js';
import { useLocation } from 'solid-start';
import { Section } from '~/root.types';
import { AppHeader } from '../AppHeader';
import { Pagination } from '../Pagination';
import { Sidebar } from '../Sidebar';
import { TableOfContents } from '../TableOfContents';
import styles from './Layout.module.scss';

type LayoutProps = ParentProps & {
  sections: Section[];
};

export const Layout = (props: LayoutProps) => {
  const location = useLocation();
  const allLinks = () =>
    props.sections
      .flatMap((section) => (section.type === 'page' ? section : section.links))
      .filter(Boolean);
  const linkIndex = () => allLinks().findIndex((link) => link?.href === location.pathname);
  const previousPage = () => allLinks()[linkIndex() - 1];
  const nextPage = () => allLinks()[linkIndex() + 1];

  return (
    <>
      <AppHeader sections={props.sections} />
      <div class={styles.body}>
        <div class={styles.aside}>
          <div class={styles.asideContent}>
            <Sidebar sections={props.sections} />
          </div>
        </div>
        <div class={styles.main}>
          <article>{props.children}</article>
          <div class={styles.pagination}>
            <Show when={previousPage()}>
              <Pagination
                type="previous"
                href={previousPage()?.href}
                title={previousPage()?.title}
              />
            </Show>
            <Show when={nextPage()}>
              <Pagination type="next" href={nextPage()?.href} title={nextPage()?.title} />
            </Show>
          </div>
        </div>
        <div class={styles.toc}>
          <TableOfContents />
        </div>
      </div>
    </>
  );
};
