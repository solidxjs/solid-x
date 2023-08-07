import { clsx } from 'clsx';
import { A as Link, useMatch } from 'solid-start';
import { FlexSearch } from './FlexSearch';
import { GitHubIcon } from './Icons';
import { MobileSidebar } from './MobileSidebar';
import { ThemeSelector } from './ThemeSelector';

const logo = (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="20" viewBox="0 0 2000 464">
    <g transform="matrix(1,0,0,1,-1.2121212121212466,-0.22339653745788723)">
      <svg
        viewBox="0 0 396 92"
        data-background-color="#ffffff"
        preserveAspectRatio="xMidYMid meet"
        height="464"
        width="2000"
        xmlns="http://www.w3.org/2000/svg">
        <g id="tight-bounds" transform="matrix(1,0,0,1,0.2400000000000091,0.04429414104768625)">
          <svg viewBox="0 0 395.52 91.91141171790461" height="91.91141171790461" width="395.52">
            <g>
              <svg
                viewBox="0 0 543.3541877632304 126.26529748218526"
                height="91.91141171790461"
                width="395.52">
                <g transform="matrix(1,0,0,1,147.83418776323037,17.450558479809985)">
                  <svg
                    viewBox="0 0 395.5199999999999 91.36418052256529"
                    height="91.36418052256529"
                    width="395.5199999999999">
                    <g id="textblocktransform">
                      <svg
                        viewBox="0 0 395.5199999999999 91.36418052256529"
                        height="91.36418052256529"
                        width="395.5199999999999"
                        id="textblock">
                        <g>
                          <svg
                            viewBox="0 0 395.5199999999999 91.36418052256529"
                            height="91.36418052256529"
                            width="395.5199999999999">
                            <g transform="matrix(1,0,0,1,0,0)">
                              <svg
                                width="395.5199999999999"
                                viewBox="1.65 -38.25 168.39 38.9"
                                height="91.36418052256529">
                                <path
                                  d="M19.4 0L3 0 3-7.75 17.9-7.75Q18.85-7.75 19.53-8.15 20.2-8.55 20.6-9.25 21-9.95 21-10.75L21-10.75Q21-11.6 20.6-12.3 20.2-13 19.53-13.4 18.85-13.8 17.9-13.8L17.9-13.8 12.95-13.8Q9.8-13.8 7.25-15.05 4.7-16.3 3.18-18.63 1.65-20.95 1.65-24.25L1.65-24.25Q1.65-27.5 3.1-29.9 4.55-32.3 7-33.65 9.45-35 12.45-35L12.45-35 28.15-35 28.15-27.25 13.65-27.25Q12.85-27.25 12.23-26.88 11.6-26.5 11.25-25.9 10.9-25.3 10.9-24.55L10.9-24.55Q10.9-23.8 11.25-23.18 11.6-22.55 12.23-22.18 12.85-21.8 13.65-21.8L13.65-21.8 18.9-21.8Q22.4-21.8 24.95-20.5 27.5-19.2 28.9-16.88 30.3-14.55 30.3-11.4L30.3-11.4Q30.3-7.8 28.83-5.23 27.35-2.65 24.88-1.33 22.4 0 19.4 0L19.4 0ZM47.5 0.6L47.5 0.6Q43.6 0.6 40.42-1.13 37.25-2.85 35.35-5.9 33.45-8.95 33.45-12.9L33.45-12.9Q33.45-16.8 35.35-19.85 37.25-22.9 40.45-24.63 43.65-26.35 47.55-26.35L47.55-26.35Q51.45-26.35 54.62-24.63 57.8-22.9 59.67-19.85 61.55-16.8 61.55-12.9L61.55-12.9Q61.55-8.95 59.67-5.9 57.8-2.85 54.62-1.13 51.45 0.6 47.5 0.6ZM47.5-7.1L47.5-7.1Q49.1-7.1 50.32-7.85 51.55-8.6 52.2-9.93 52.85-11.25 52.85-12.9L52.85-12.9Q52.85-14.6 52.2-15.9 51.55-17.2 50.32-17.95 49.1-18.7 47.5-18.7L47.5-18.7Q45.9-18.7 44.7-17.95 43.5-17.2 42.82-15.9 42.15-14.6 42.15-12.9L42.15-12.9Q42.15-11.25 42.82-9.93 43.5-8.6 44.7-7.85 45.9-7.1 47.5-7.1ZM74.3 0L65.65 0 65.65-36.5 74.3-36.5 74.3 0ZM88.04 0L79.34 0 79.34-25.75 88.04-25.75 88.04 0ZM83.69-28.55L83.69-28.55Q81.74-28.55 80.29-30 78.84-31.45 78.84-33.4L78.84-33.4Q78.84-35.4 80.29-36.83 81.74-38.25 83.69-38.25L83.69-38.25Q85.64-38.25 87.09-36.83 88.54-35.4 88.54-33.4L88.54-33.4Q88.54-31.45 87.09-30 85.64-28.55 83.69-28.55ZM106.24 0.65L106.24 0.65Q110.44 0.65 113.62-1.1 116.79-2.85 118.54-5.98 120.29-9.1 120.29-13.35L120.29-13.35 120.29-36.5 111.59-36.5 111.59-23.35 111.39-23.35Q110.59-24.35 109.54-25.03 108.49-25.7 107.19-26.03 105.89-26.35 104.49-26.35L104.49-26.35Q100.94-26.35 98.14-24.7 95.34-23.05 93.77-20.13 92.19-17.2 92.19-13.3L92.19-13.3Q92.19-10.2 93.17-7.68 94.14-5.15 95.97-3.28 97.79-1.4 100.39-0.38 102.99 0.65 106.24 0.65ZM106.24-6.9L106.24-6.9Q104.64-6.9 103.47-7.68 102.29-8.45 101.67-9.8 101.04-11.15 101.04-12.85L101.04-12.85Q101.04-14.5 101.67-15.8 102.29-17.1 103.47-17.88 104.64-18.65 106.24-18.65L106.24-18.65Q107.74-18.65 108.94-17.88 110.14-17.1 110.79-15.8 111.44-14.5 111.44-12.85L111.44-12.85Q111.44-11.15 110.79-9.8 110.14-8.45 108.94-7.68 107.74-6.9 106.24-6.9ZM147.89 0L137.24 0 146.39-15Q144.04-16.05 142.31-17.75 140.59-19.45 139.69-21.73 138.79-24 138.79-26.8L138.79-26.8 138.79-35 148.34-35 148.34-26.3Q148.34-25.2 148.76-24.3 149.19-23.4 149.94-22.8 150.69-22.2 151.64-22L151.64-22 159.39-35 170.04-35 160.99-20.35Q163.69-19.5 165.64-17.78 167.59-16.05 168.64-13.65 169.69-11.25 169.69-8.2L169.69-8.2 169.69 0 160.14 0 160.14-8.65Q160.14-10.5 158.96-11.85 157.79-13.2 155.89-13.4L155.89-13.4 147.89 0Z"
                                  opacity="1"
                                  transform="matrix(1,0,0,1,0,0)"
                                  fill="currentColor"
                                  class="wordmark-text-0"
                                  data-fill-palette-color="primary"
                                  id="text-0"></path>
                              </svg>
                            </g>
                          </svg>
                        </g>
                      </svg>
                    </g>
                  </svg>
                </g>
                <g>
                  <svg
                    viewBox="0 0 126.26529748218526 126.26529748218526"
                    height="126.26529748218526"
                    width="126.26529748218526">
                    <g>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        x="0"
                        y="0"
                        viewBox="5 5 90 90"
                        enable-background="new 0 0 100 100"
                        height="126.26529748218526"
                        width="126.26529748218526"
                        class="icon-icon-0"
                        data-fill-palette-color="accent"
                        id="icon-0">
                        <polygon
                          fill="currentColor"
                          points="81.5,88.6 95,75.1 95,11.4 81.5,24.9 "
                          data-fill-palette-color="accent"></polygon>
                        <polygon
                          fill="currentColor"
                          points="24.9,5 11.4,18.5 75.1,18.5 88.6,5 "
                          data-fill-palette-color="accent"></polygon>
                        <rect
                          x="5"
                          y="27.5"
                          fill="currentColor"
                          width="67.5"
                          height="67.5"
                          data-fill-palette-color="accent"></rect>
                      </svg>
                    </g>
                  </svg>
                </g>
              </svg>
            </g>
            <defs></defs>
          </svg>
          <rect
            width="395.52"
            height="91.91141171790461"
            fill="none"
            stroke="none"
            visibility="hidden"></rect>
        </g>
      </svg>
    </g>
  </svg>
);

const classes = {
  links: 'px-3 py-2 rounded-md flex items-center justify-center transition',
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

export const AppHeader = () => {
  const isDocumentationPath = useMatch(() => '/docs/*');
  const isAboutPath = useMatch(() => '/about/*');

  return (
    <header
      class={
        'sticky top-0 z-50 bg-white dark:bg-dark border-b border-b-black/20 dark:border-b-white/20 px-4 transition duration-500 lg:px-6 h-[var(--sx-header-height)]'
      }>
      <nav class="flex flex-wrap items-center justify-between h-full max-w-[90rem] mx-auto">
        <div class="me-4 flex lg:hidden">
          <MobileSidebar />
        </div>
        <div class="relative flex flex-grow basis-0 items-center gap-2">
          <Link
            class="text-gray-800 dark:text-gray-200 font-medium font-display text-xl leading-none"
            href="/">
            {logo}
          </Link>
          <span class="rounded bg-gray-200 text-gray-800 px-1.5 py-1 text-sm leading-none dark:bg-gray-800 dark:text-gray-300">
            v0.1.0
          </span>
        </div>

        <div class="relative flex basis-0 justify-end md:flex-grow items-center py-2">
          <div id="docsearch" class="mx-3.5 flex items-center justify-center">
            <FlexSearch class="hidden md:inline-block min-w-[200px]" />
          </div>
          <div class="hidden lg:flex lg:gap-2 text-sm">
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
          <Link
            href="https://github.com/raghavan-renganathan/solid-x"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2.5 mx-2 rounded flex items-center justify-center transition text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
            aria-label="GitHub">
            <GitHubIcon class="h-5 w-5" />
          </Link>
          <ThemeSelector />
        </div>
      </nav>
    </header>
  );
};