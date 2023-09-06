import { ParentProps, Show } from 'solid-js';
import { Section } from '~/root.types';
import { PageNavigation } from './PageNavigation';
import { Sidebar } from './Sidebar';
import { TOC } from './TOC';
import { ActiveAnchorProvider } from './context/ActiveAnchorContext';
import { useLocation } from 'solid-start';
import { AppHeader } from './AppHeader';

type LayoutProps = ParentProps & {
  sections: Section[];
};

export const Layout = (props: LayoutProps) => {
  const location = useLocation();
  const allLinks = () => props.sections.flatMap((section) => section.links);
  const linkIndex = () => allLinks().findIndex((link) => link?.href === location.pathname);
  const previousPage = () => allLinks()[linkIndex() - 1];
  const nextPage = () => allLinks()[linkIndex() + 1];

  return (
    <>
      <AppHeader sections={props.sections} />
      <div class="relative flex justify-center dark:bg-dark max-w-[90rem] mx-auto">
        <ActiveAnchorProvider>
          <div class="hidden lg:relative lg:block lg:flex-none">
            <div class="sticky top-[var(--sx-header-height)] h-[calc(100vh-var(--sx-header-height))] overflow-y-auto py-6 pl-6 pr-2">
              <Sidebar sections={props.sections} />
            </div>
          </div>
          <div class="min-w-0 mx-auto max-w-2xl flex-auto px-4 xl:px-16 py-16 lg:max-w-4xl">
            <article>{props.children}</article>
            <div class="mt-12 flex border-t border-gray-200 pt-12 dark:border-gray-800">
              <Show when={previousPage()}>
                <PageNavigation
                  type="previous"
                  href={previousPage()?.href}
                  title={previousPage()?.title}
                />
              </Show>
              <Show when={nextPage()}>
                <PageNavigation type="next" href={nextPage()?.href} title={nextPage()?.title} />
              </Show>
            </div>
          </div>
          <div class="hidden xl:block shrink-0">
            <TOC />
          </div>
        </ActiveAnchorProvider>
      </div>
    </>
  );
};
