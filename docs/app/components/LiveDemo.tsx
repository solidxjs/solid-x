import { useDebouncedState } from '@/app/hooks/useDebouncedState';
import { PreviewMeta, usePreviewCode } from '@/app/hooks/usePreviewCode';
import { ComponentProps, useEffect, useReducer, useState } from 'react';
import { DemoEditor } from './DemoEditor';
import { DemoError } from './DemoError';
import { DemoPreview } from './DemoPreview';
import { DemoToolbar } from './DemoToolbar';

type DemoPreviewProps = ComponentProps<typeof DemoPreview>;
type Props = {
  /**
   * The full raw code for the demo.
   */
  sourceCode?: string;

  /**
   * The preview code for the demo.
   */
  previewMeta?: PreviewMeta;

  /**
   * The globals and imports for the demo.
   */
  scope: DemoPreviewProps['scope'];

  /**
   * The language of the demo code.
   */
  language: 'jsx' | 'tsx';

  /**
   * Width of the demo.
   */
  width?: string;

  /**
   * Height of the demo.
   */
  height?: string;
};

export const LiveDemo = ({
  height,
  language,
  previewMeta,
  scope,
  sourceCode = '',
  width,
}: Props) => {
  const [demoKey, setDemoKey] = useReducer((key) => key + 1, 0);
  const [isPreview, setIsPreview] = useState(true);
  const previewCode = usePreviewCode(sourceCode, previewMeta);
  const [editorCode, setEditorCode] = useState(previewCode);
  const [error, setError] = useDebouncedState<string | null>(null, 300);

  useEffect(() => {
    setEditorCode(isPreview ? previewCode : sourceCode);
  }, [isPreview, previewCode, sourceCode]);

  return (
    <div className={`flex flex-col gap-3 h-[${height ?? 'initial'}] w-[${width ?? 'initial'}]`}>
      <div className="rounded-xl border border-solid border-[var(--sx-demo-container-background)] overflow-clip flex-shrink-0">
        <DemoError>{error}</DemoError>
        <DemoPreview
          key={demoKey}
          editorCode={editorCode}
          previewMeta={previewMeta}
          sourceCode={sourceCode}
          scope={scope}
          isPreview={isPreview}
          onErrorStateChange={setError}
        />
        <DemoToolbar
          isPreview={isPreview}
          isPreviewDisabled={previewMeta == null}
          onCodePreviewToggleClick={() => setIsPreview((isPreview) => !isPreview)}
          onCopySourceCodeClick={() => navigator.clipboard.writeText(editorCode)}
          onResetDemoClick={() => {
            setEditorCode(isPreview ? previewCode : sourceCode);
            setDemoKey();
          }}
        />
      </div>
      <div className="relative overflow-hidden">
        <DemoEditor
          code={editorCode}
          language={language}
          onCodeChange={(code) => setEditorCode(code)}
        />
      </div>
    </div>
  );
};
