import { createEffect } from 'solid-js';
import { useCompleteCode } from '~/hooks/useCompleteCode';
import { PreviewMeta } from '~/hooks/usePreviewCode';
import { Scope, useRunner } from '~/hooks/useRunner';

type Props = {
  isPreview: boolean;
  editorCode: string;
  previewMeta?: PreviewMeta;
  sourceCode: string;
  scope: Scope;
  onErrorStateChange: (error: string | null) => void;
};
export const DemoPreview = (props: Props) => {
  const code = useCompleteCode(props);
  const result = useRunner({
    get code() {
      return code();
    },
    get scope() {
      return props.scope;
    },
  });

  createEffect(() => {
    props.onErrorStateChange(result().error);
  });

  return <div class="flex justify-center p-6">{result().element}</div>;
};
