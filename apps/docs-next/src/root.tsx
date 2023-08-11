// @refresh reload
import { ColorModeProvider, ColorModeScript, cookieStorageManagerSSR } from '@kobalte/core';
import { Suspense, useContext } from 'solid-js';
import { isServer } from 'solid-js/web';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  ServerContext,
  Title,
} from 'solid-start';
import { AppHeader } from '~/components/AppHeader';
import { PageStateProvider } from '~/components/context/PageStateContext';
import { MDXProvider } from '~/libs/solid-mdx';
import { getComponents } from '~/mdx-components';
import { NavigationStateProvider } from './components/context/NavigationStateContext';

import '@solid-x/material/theme.css';
import './root.css';
import './shiki.css';

export default function Root() {
  const event = useContext(ServerContext);
  const storageManager = cookieStorageManagerSSR(
    isServer ? event?.request.headers.get('cookie') ?? '' : document.cookie,
  );
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Title>SolidStart - With MDX</Title>
        <Meta charset="utf-8" />
        <Meta name="msapplication-TileColor" content="#fff" />
        <Meta name="theme-color" content="#fff" />
        <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta http-equiv="Content-Language" content="en" />
        <Meta name="description" content="Make beautiful websites with SolidJS and Material You!" />
        <Meta
          name="og:description"
          content="Make beautiful websites with SolidJS and Material You!"
        />
        <Meta name="twitter:card" content="summary" />
        <Meta name="twitter:title" content="Solid X" />
        <Meta
          name="twitter:description"
          content="Make beautiful websites with SolidJS and Material You!"
        />
        <Meta name="twitter:site:domain" content="solidx.dev" />
        <Meta name="twitter:url" content="https://solidx.dev" />
        <Meta name="og:title" content="Solid X" />
        <Meta name="apple-mobile-web-app-title" content="Solid X" />
        <Link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Link rel="icon" href="/favicon.png" type="image/png" />
        <Link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <Link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <Body class="dark:bg-dark min-h-screen w-screen">
        <ErrorBoundary>
          <ColorModeScript storageType={storageManager.type} />
          <Suspense>
            <ColorModeProvider storageManager={storageManager}>
              <NavigationStateProvider>
                <PageStateProvider>
                  <MDXProvider components={getComponents()}>
                    <AppHeader />
                    <Routes>
                      <FileRoutes />
                    </Routes>
                  </MDXProvider>
                </PageStateProvider>
              </NavigationStateProvider>
            </ColorModeProvider>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
