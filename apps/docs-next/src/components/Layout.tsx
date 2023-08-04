import { ParentProps, Show } from 'solid-js';
import { PageNavigation } from './PageNavigation';
import { Sidebar } from './Sidebar';
import { TOC } from './TOC';
import { ActiveAnchorProvider } from './context/ActiveAnchorContext';
import { useNavigationStateContext } from './context/NavigationStateContext';

type LayoutProps = ParentProps & {
  hideSidebar?: boolean;
  hideTOC?: boolean;
};

export const Layout = (props: LayoutProps) => {
  const navigationState = useNavigationStateContext();  
  return (
    <>
      <div class="relative flex justify-center dark:bg-dark max-w-[90rem] mx-auto">
        <ActiveAnchorProvider>
          {
            !props.hideSidebar && (
              <div class="hidden lg:relative lg:block lg:flex-none">
                <div class="sticky top-[var(--sx-header-height)] h-[calc(100vh-var(--sx-header-height))] overflow-y-auto py-6 pl-6 pr-2">
                  <Sidebar />
                </div>
              </div>
            )
          }
          <div class="min-w-0 mx-auto max-w-2xl flex-auto px-4 xl:px-16 py-16 lg:max-w-4xl">
            <article>
              {props.children}
            </article>
            <div class="mt-12 flex border-t border-gray-200 pt-12 dark:border-gray-800">
              <Show when={navigationState.previousPage()}>
                <PageNavigation
                  type="previous"
                  href={navigationState.previousPage()?.href}
                  title={navigationState.previousPage()?.title}
                />
              </Show>
              <Show when={navigationState.nextPage()}>
                <PageNavigation
                  type="next"
                  href={navigationState.nextPage()?.href}
                  title={navigationState.nextPage()?.title}
                />
              </Show>
            </div>
          </div>
          {
            !props.hideTOC && (
              <div class="hidden xl:block shrink-0">
                <TOC />
              </div>
            )
          }
        </ActiveAnchorProvider>
      </div>
    </>
  );
};
