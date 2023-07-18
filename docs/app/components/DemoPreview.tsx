import { useCompleteCode } from '@/app/hooks/useCompleteCode';
import { useEffectEvent } from '@/app/hooks/useEffectEvent';
import { PreviewMeta } from '@/app/hooks/usePreviewCode';
import { Scope, useRunner } from '@/app/hooks/useRunner';
import { useEffect } from 'react';

type Props = {
  isPreview: boolean;
  editorCode: string;
  previewMeta?: PreviewMeta;
  sourceCode: string;
  scope: Scope;
  onErrorStateChange: (error: string | null) => void;
};
export const DemoPreview = ({
  isPreview,
  editorCode,
  previewMeta,
  sourceCode,
  scope,
  onErrorStateChange
}: Props) => {
  const code = useCompleteCode({
    editorCode,
    isPreview,
    previewMeta,
    sourceCode
  });
  const { element, error } = useRunner({
    code,
    scope,
    onRendered: () => onErrorStateChange(null),
    onRuntimeError: (error) => onErrorStateChange(error.message)
  });
  const onErrorStateChangeHandler = useEffectEvent(onErrorStateChange);

  useEffect(() => {
    onErrorStateChangeHandler(error);
  }, [error]);

  return (
    <div className="flex justify-center p-6">{element}</div>
  );
};
