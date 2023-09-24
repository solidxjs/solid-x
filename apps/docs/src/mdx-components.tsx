import { IconButton } from '@solid-x/material/IconButton';
import { Title as MetaTitle } from '@solidjs/meta';
import { clsx } from 'clsx';
import { Component, ComponentProps, createSignal, Show, splitProps } from 'solid-js';
import { Callout } from '~/components/Callout/Callout';
import { Heading } from '~/components/Heading/Heading';
import { CheckIcon, CopyIcon } from '~/components/Icons';
import { Tabs } from '~/components/Tabs';
import { ApiDoc } from '~/components/ApiDoc/ApiDoc';

export const getComponents = (): Record<string, Component> => {
  return {
    h1: (props: ComponentProps<'h1'>) => {
      const [local, others] = splitProps(props, ['children']);

      return (
        <h1 class="mdx-h1" {...others}>
          <MetaTitle>{local.children + ' - Solid X'}</MetaTitle>
          {local.children}
        </h1>
      );
    },
    h2: (props) => <Heading tag="h2" {...props} />,
    h3: (props) => <Heading tag="h3" {...props} />,
    h4: (props) => <Heading tag="h4" {...props} />,
    h5: (props) => <Heading tag="h5" {...props} />,
    h6: (props) => <Heading tag="h6" {...props} />,
    p: (props) => <p class="mdx-p" {...props} />,
    ul: (props) => <ul class="mdx-ul" {...props} />,
    ol: (props) => <ol class="mdx-ol" {...props} />,
    li: (props) => <li class="mdx-li" {...props} />,
    code: (props: ComponentProps<'code'>) => {
      const [local, others] = splitProps(props, ['class']);

      return (
        <span class={local.class}>
          <code class="mdx-code" {...others} />
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
          <div class="mdx-pre__copy-button">
            <IconButton aria-label="copy to clipboard" onAction={copyToClipboard}>
              <Show when={isCopied()} fallback={<CopyIcon height="1rem" width="1rem" />}>
                <CheckIcon height="1rem" width="1rem" />
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
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      return <a target="_blank" rel="noopener noreferrer" {...props} />;
    },

    /**
     * Custom Components
     */
    ApiDoc: ApiDoc as Component,
    Callout: Callout as Component,
    Tabs: Tabs,
  };
};
