import { ComponentProps, createEffect, createSignal } from 'solid-js';
import { useDebounced } from '~/hooks/useDebounced';
import { PreviewMeta, usePreviewCode } from '~/hooks/usePreviewCode';
import { DemoEditor } from './DemoEditor';
import { DemoError } from './DemoError';
import { DemoPreview } from './DemoPreview';
import { DemoToolbar } from './DemoToolbar';

type DemoPreviewProps = ComponentProps<typeof DemoPreview>;
type Props = {
  /**
   * The full raw code for the demo.
   */
  sourceCode: string;

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

export const LiveDemo = (props: Props) => {
  const [isPreview, setIsPreview] = createSignal(false);
  const previewCode = usePreviewCode({
    get code() {
      return props.sourceCode;
    },
    get previewMeta() {
      return props.previewMeta;
    },
  });
  const [editorCode, setEditorCode] = createSignal<string>('');
  const [error, setError] = useDebounced<string | null>(null, 300);

  createEffect(() => {
    setEditorCode(isPreview() ? previewCode() : props.sourceCode);
  });

  return (
    <div
      class={`flex flex-col gap-3 h-[${props.height ?? 'initial'}] w-[${
        props.width ?? 'initial'
      }]`}>
      <div class="rounded-xl border border-solid border-[var(--sx-demo-container-background)] overflow-clip flex-shrink-0">
        <DemoError>{error()}</DemoError>
        <DemoPreview
          editorCode={editorCode()}
          previewMeta={props.previewMeta}
          sourceCode={props.sourceCode}
          scope={props.scope}
          isPreview={isPreview()}
          onErrorStateChange={setError}
        />
        <DemoToolbar
          isPreview={isPreview()}
          isPreviewDisabled={props.previewMeta == null}
          onCodePreviewToggleClick={() => setIsPreview((isPreview) => !isPreview)}
          onCopySourceCodeClick={() => navigator.clipboard.writeText(editorCode())}
          onResetDemoClick={() => {
            setEditorCode(isPreview() ? previewCode : props.sourceCode);
          }}
        />
      </div>
      <div class="relative overflow-hidden">
        <DemoEditor
          code={editorCode()}
          language={props.language}
          onCodeChange={(code) => setEditorCode(code)}
        />
      </div>
    </div>
  );
};
