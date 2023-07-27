import { useMemo } from 'react';
import { PreviewMeta } from './usePreviewCode';

type Props = {
  /**
   * The full source code
   */
  sourceCode: string;

  /**
   * The current editor code
   */
  editorCode: string;

  /**
   * Flag indicating if we are in preview mode
   */
  isPreview: boolean;

  /**
   * Preview meta
   */
  previewMeta?: PreviewMeta;
};

/**
 * A custom hook that constructs the full code if the code is edited in the
 * preview mode.
 *
 * @param param0 The options for the useCompleteCode hook
 * @return complete code
 */
export function useCompleteCode({ editorCode, isPreview, previewMeta = {}, sourceCode }: Props) {
  const { startLine: previewStartLine, endLine: previewEndLine } = previewMeta;
  return useMemo(() => {
    // If we are not in preview mode, return the current editorCode
    if (!isPreview) return editorCode;

    // If we are in preview mode, inject the editor code into the source code
    // based on the preview meta
    const sourceCodeParts = sourceCode.split('\n');
    const editorCodeParts = editorCode.split('\n');
    const treatedStartIndex = (previewStartLine ?? 1) - 1;
    const treatedEndIndex = previewEndLine ?? sourceCode.length;

    const completeCode = sourceCodeParts.slice();
    completeCode.splice(treatedStartIndex, treatedEndIndex - treatedStartIndex, ...editorCodeParts);
    return completeCode.join('\n');
  }, [editorCode, isPreview, previewEndLine, previewStartLine, sourceCode]);
}
