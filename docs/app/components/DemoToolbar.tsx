import { CodeIcon } from './CodeIcon';
import { CopyIcon } from './CopyIcon';
import { ResetIcon } from './ResetIcon';
import { ToolbarButton } from './ToolbarButton';

type Props = {
  isPreview: boolean;
  isPreviewDisabled?: boolean;
  onCodePreviewToggleClick: () => void;
  onCopySourceCodeClick: () => void;
  onResetDemoClick: () => void;
};
export const DemoToolbar = ({
  isPreview,
  isPreviewDisabled,
  onCodePreviewToggleClick,
  onCopySourceCodeClick,
  onResetDemoClick
}: Props) => (
  <div className="flex bg-[var(--sx-demo-container-background)] p-2 justify-end gap-1">      
    {
      !isPreviewDisabled && (
        <ToolbarButton title={isPreview ? 'Show full code' : 'Hide full code'} onClick={onCodePreviewToggleClick}>
          <CodeIcon />
        </ToolbarButton>
      )
    }

    <ToolbarButton title="Copy the source code" onClick={onCopySourceCodeClick}>
      <CopyIcon />
    </ToolbarButton>
    
    <ToolbarButton title="Reset the demo" onClick={onResetDemoClick}>
      <ResetIcon />
    </ToolbarButton>
  </div>
);
