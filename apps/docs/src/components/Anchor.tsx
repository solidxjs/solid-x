import { ComponentProps, Match, Switch, splitProps } from 'solid-js';
import { A } from 'solid-start';
import { OpenInNew } from './Icons';

export type AnchorProps = ComponentProps<'a'> & {
  newWindow?: boolean;
};

export const Anchor = (props: AnchorProps) => {
  const [local, others] = splitProps(props, ['children']);

  return (
    <Switch>
      <Match when={others.newWindow}>
        <a target="_blank" rel="noreferrer" {...others}>
          <span class="flex items-center gap-1">
            {local.children}
            <OpenInNew class="inline" height="1em" width="1em" />
          </span>
          <span class="sr-only select-none"> (opens in a new tab)</span>
        </a>
      </Match>
      <Match when={!others.href}>
        <a {...others}>{local.children}</a>
      </Match>
      <Match when={others.href}>
        <A {...others} href={others.href ?? ''}>
          {local.children}
        </A>
      </Match>
    </Switch>
  );
};
