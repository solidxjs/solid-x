import { Show } from 'solid-js';
import { DemoToolbarButton } from './DemoToolbarButton';
import { CodeIcon, CopyIcon, ResetIcon } from './Icons';

type Props = {
  isPreview: boolean;
  isPreviewDisabled?: boolean;
  onCodePreviewToggleClick: () => void;
  onCopySourceCodeClick: () => void;
  onResetDemoClick: () => void;
};
export const DemoToolbar = (props: Props) => (
  <div class="flex border-t border-t-black/20 dark:bottom-t-white/20 p-2 justify-end gap-1">
    <Show when={!props.isPreviewDisabled}>
      <DemoToolbarButton
        title={props.isPreview ? 'Show full code' : 'Hide full code'}
        onClick={props.onCodePreviewToggleClick}>
        <CodeIcon />
      </DemoToolbarButton>
    </Show>

    <DemoToolbarButton title="Copy the source code" onClick={props.onCopySourceCodeClick}>
      <CopyIcon />
    </DemoToolbarButton>

    <DemoToolbarButton title="Reset the demo" onClick={props.onResetDemoClick}>
      <ResetIcon />
    </DemoToolbarButton>
  </div>
);
