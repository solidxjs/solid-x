import docsearch from '@docsearch/js';
import { onMount } from 'solid-js';
import { A as Link, useMatch } from 'solid-start';
import { LATEST_CHANGELOG_URL } from '~/data/versions/material';
import { Section } from '~/root.types';
import sharedStyles from '~/shared/shared.module.scss';
import { GitHubIcon, Logo } from '../Icons';
import { MobileSidebar } from '../MobileSidebar';
import { ThemeSelector } from '../ThemeSelector';
import styles from './AppHeader.module.scss';

export const AppHeader = (props: { sections: Section[] }) => {
  const isDocumentationPath = useMatch(() => '/docs/*');
  const isChangelogPath = useMatch(() => '/changelog/*');

  onMount(() => {
    docsearch({
      appId: 'R2IYF7ETH7',
      apiKey: '599cec31baffa4868cae4e79f180729b',
      indexName: 'docsearch',
      container: '#docsearch',
    });
  });

  return (
    <header class={styles.header}>
      <nav class={styles.navigation}>
        <div class={styles.mobileSidebarContainer}>
          <MobileSidebar sections={props.sections} />
        </div>
        <div class={styles.logoContainer}>
          <Link class={styles.logo} href="/">
            <Logo height={20} />
          </Link>
          <span class={styles.version}>v0.1.0</span>
        </div>

        <div class={styles.headerEndContent}>
          <div id="docsearch" class="mx-3.5 flex items-center justify-center" />
          <div class={styles.links}>
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
          <Link
            href="https://github.com/solidxjs/solid-x"
            target="_blank"
            rel="noopener noreferrer"
            class={`${styles.icon} ${sharedStyles.linkInactive}`}
            aria-label="GitHub">
            <GitHubIcon height="1.25rem" width="1.25rem" />
          </Link>
          <ThemeSelector />
        </div>
      </nav>
    </header>
  );
};
