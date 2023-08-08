import { clsx } from 'clsx';
import { Show, createEffect, createMemo, createSignal, on } from 'solid-js';
import { A as Link, useLocation, useMatch } from 'solid-start';
import { FlexSearch } from './FlexSearch';
import { CloseIcon, Menu } from './Icons';
import { Sidebar } from './Sidebar';

const classes = {
  links: 'px-2 py-1.5 rounded-md flex items-center transition',
  inactive: clsx(
    'text-gray-500 hover:bg-gray-100 hover:text-gray-900',
    'dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50',
    'contrast-more:text-gray-900 contrast-more:dark:text-gray-50',
    'contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50',
  ),
  active: clsx(
    'bg-primary-100 font-semibold text-primary-800 dark:bg-primary-400/10 dark:text-primary-600',
    'contrast-more:border-primary-500 contrast-more:dark:border-primary-500',
  ),
};

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const isDocumentationPath = useMatch(() => '/docs/*');
  const isAboutPath = useMatch(() => '/about/*');
  const pathname = createMemo(() => useLocation().pathname);

  createEffect(on(pathname, () => setIsOpen(false)));

  return (
    <div>
      <span
        class={clsx(classes.links, classes.inactive)}
        tabIndex={0}
        onClick={() => setIsOpen((value) => !value)}>
        <Show when={isOpen()} fallback={<Menu height={30} width={30} />}>
          <CloseIcon height={30} width={30} />
        </Show>
      </span>
      <div
        class={clsx(
          'fixed top-[var(--sx-header-height)] right-0 bottom-0 left-0 overflow-hidden transition-all ease-in-out motion-reduce:transition-none',
          isOpen() ? 'max-h-full' : 'max-h-0',
        )}>
        <Sidebar class="bg-white dark:bg-dark p-5">
          <ul class="border-b border-b-black/20 dark:border-white/20 pb-8 mb-8">
            <div class="pt-4 pb-8 md:hidden">
              <FlexSearch />
            </div>
            <div class="flex flex-col gap-2 text-sm">
              <Link
                href="/docs/introduction"
                class={clsx(
                  classes.links,
                  isDocumentationPath() ? classes.active : classes.inactive,
                )}>
                Documentation
              </Link>
              <Link
                href="/about"
                class={clsx(classes.links, isAboutPath() ? classes.active : classes.inactive)}>
                About
              </Link>
            </div>
          </ul>
        </Sidebar>
      </div>
    </div>
  );
};
