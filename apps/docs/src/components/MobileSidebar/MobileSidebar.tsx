/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ComponentProps, Show, createEffect, createSignal, on } from 'solid-js';
import { A as Link, useLocation, useMatch } from 'solid-start';
import sharedStyles from '~/shared/shared.module.scss';
import { LATEST_CHANGELOG_URL } from '../../data/versions/material';
import { CloseIcon, Menu } from '../Icons';
import { Sidebar } from '../Sidebar';
import styles from './MobileSidebar.module.scss';

export const MobileSidebar = (props: ComponentProps<typeof Sidebar>) => {
  const [isOpen, setIsOpen] = createSignal(false);
  const isDocumentationPath = useMatch(() => '/docs/*');
  const isChangelogPath = useMatch(() => '/changelog/*');
  const pathname = () => useLocation().pathname;

  createEffect(on(pathname, () => setIsOpen(false)));

  return (
    <div>
      <span
        role="button"
        class={`${sharedStyles.link} ${sharedStyles.linkInactive}`}
        tabIndex={0}
        onClick={() => setIsOpen((value) => !value)}>
        <Show when={isOpen()} fallback={<Menu height={30} width={30} />}>
          <CloseIcon height={30} width={30} />
        </Show>
      </span>
      <div
        classList={{
          [styles.sidebarContainer]: true,
          [styles.sidebarContainerOpen]: isOpen(),
        }}>
        <Sidebar {...props} class={styles.sidebar}>
          <ul class={styles.sidebarChild}>
            <div id="docsearch" class={styles.sidebarSearch} />
            <div class={styles.sidebarLinksContainer}>
              <Link
                href="/docs/introduction"
                classList={{
                  [sharedStyles.link]: true,
                  [sharedStyles.linkActive]: !!isDocumentationPath(),
                  [sharedStyles.linkInactive]: !isDocumentationPath(),
                }}>
                Documentation
              </Link>
              <Link
                href={LATEST_CHANGELOG_URL}
                classList={{
                  [sharedStyles.link]: true,
                  [sharedStyles.linkActive]: !!isChangelogPath(),
                  [sharedStyles.linkInactive]: !isChangelogPath(),
                }}>
                Changelog
              </Link>
            </div>
          </ul>
        </Sidebar>
      </div>
    </div>
  );
};
