import { IconButton } from '@solid-x/material/IconButton';
import { Title as MetaTitle } from '@solidjs/meta';
import { clsx } from 'clsx';
import { Component, ComponentProps, createSignal, Show, splitProps } from 'solid-js';
import { Callout } from '~/components/Callout';
import { Heading } from '~/components/Heading';
import { CheckIcon, CopyIcon } from '~/components/Icons';
import { Tabs } from '~/components/Tabs';

export const getComponents = (): Record<string, Component> => {
  const context = { index: 0 };
  return {
    h1: (props: ComponentProps<'h1'>) => {
      const [local, others] = splitProps(props, ['children']);

      return (
        <h1
          class={'mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100'}
          {...others}
        >
          <MetaTitle>{local.children + ' - Solid X'}</MetaTitle>
          {local.children}
        </h1>
      );
    },
    h2: props => <Heading tag="h2" context={context} {...props} />,
    h3: props => <Heading tag="h3" context={context} {...props} />,
    h4: props => <Heading tag="h4" context={context} {...props} />,
    h5: props => <Heading tag="h5" context={context} {...props} />,
    h6: props => <Heading tag="h6" context={context} {...props} />,
    p: props => <p class="mt-6 leading-7 first:mt-0" {...props} />,
    ul: props => (
      <ul
        class="mt-6 list-disc first:mt-0 ltr:ml-6 rtl:mr-6"
        {...props}
      />
    ),
    ol: props => (
      <ol
        class="mt-6 list-decimal first:mt-0 ltr:ml-6 rtl:mr-6"
        {...props}
      />
    ),
    li: props => <li class="my-2" {...props} />,
    code: (props: ComponentProps<'code'>) => {
      const [local, others] = splitProps(props, ['class']);

      return (
        <span class={clsx(local.class, 'not-prose')}>
          <code
            class={clsx(
              'sx-code rounded text-sky-800 bg-sky-100 px-[0.4em] py-[0.2em] text-[0.9em] font-mono break-words dark:text-sky-300 dark:bg-sky-900/60'
            )}
            {...others}
          />
        </span>
      );
    },
    pre: (props: ComponentProps<'pre'>) => {
      let domRef: HTMLPreElement | undefined;
      const [local, others] = splitProps(props, ['children']);
      const [isCopied, setIsCopied] = createSignal(false);
      const reset = () => {
        setIsCopied(false);
      };
      const copyToClipboard = () => {
        const innerText = domRef?.querySelector('code')?.innerText ?? '';
        setIsCopied(true);
        void navigator.clipboard.writeText(innerText);
        setTimeout(() => setIsCopied(false), 2000);
      };

      return (
        <pre ref={domRef} onMouseLeave={reset} {...others}>
          <div class="sx-copy-btn absolute transition-all top-1 right-2 z-10">
            <IconButton
              aria-label="copy to clipboard"
              onAction={copyToClipboard}
            >
              <Show when={isCopied()} fallback={<CopyIcon class="h-4 w-4 text-black dark:text-white" />}>
                <CheckIcon class="h-4 w-4 text-green-500" />
              </Show>
            </IconButton>
          </div>
          {local.children}
        </pre>
      );
    },
    table: (props: ComponentProps<'table'>) => {
      const [local, others] = splitProps(props, ['class']);

      return (
        <div style={{ 'overflow-x': 'auto' }}>
          <table class={clsx(local.class, 'sx-table')} {...others} />
        </div>
      );
    },
    a: (props: ComponentProps<'a'>) => {
      return <a target="_blank" rel="noopener noreferrer" {...props} />;
    },

    /**
     * Custom Components
     */
    Callout: Callout as Component,
    Tabs: Tabs
  };
};
