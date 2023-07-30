import { ComponentProps, createMemo, splitProps } from 'solid-js';
import { A } from 'solid-start';
import { OpenInNew } from './icons';

export type AnchorProps = ComponentProps<'a'> & {
  newWindow?: boolean
};

export function Anchor (props: AnchorProps) {
  const [local, others] = splitProps(props, ['children']);
  const newWindow = createMemo(() => props.newWindow);
  const href = createMemo(() => props.href ?? '');

  if (newWindow()) {
    return (
      <a target="_blank" rel="noreferrer" {...others}>
        <span class="flex items-center gap-1">
          {local.children}<OpenInNew class="inline" height="1em" width="1em" />
        </span>
        <span class="sr-only select-none"> (opens in a new tab)</span>
      </a>
    );
  }

  if (!href()) {
    return (<a {...props}></a>);
  }

  return (<A {...props} href={href()}>{local.children}</A>);
};
