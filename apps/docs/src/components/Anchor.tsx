import { ComponentProps, splitProps } from 'solid-js';
import { A } from 'solid-start';
import { OpenInNew } from './Icons';

export type AnchorProps = ComponentProps<'a'> & {
  newWindow?: boolean;
};

export const Anchor = (props: AnchorProps) => {
  const [local, others] = splitProps(props, ['children']);
  const newWindow = () => props.newWindow;
  const href = () => props.href ?? '';

  if (newWindow()) {
    return (
      <a target="_blank" rel="noreferrer" {...others}>
        <span class="flex items-center gap-1">
          {local.children}
          <OpenInNew class="inline" height="1em" width="1em" />
        </span>
        <span class="sr-only select-none"> (opens in a new tab)</span>
      </a>
    );
  }

  if (!href()) {
    return <a {...props}></a>;
  }

  return (
    <A {...props} href={href()}>
      {local.children}
    </A>
  );
};
