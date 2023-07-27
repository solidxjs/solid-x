import { useMemo } from 'react';

export type PreviewMeta = {
  /**
   * The line number where the preview code starts (line number starts at 1)
   */
  startLine?: number;

  /**
   * The line number where the preview code ends (line number starts at 1)
   */
  endLine?: number;
};

/**
 * Custom hook that fetches the preview code from the source code.
 *
 * @param code The source code
 * @param previewMeta The meta defining positions of the preview code
 * @returns The preview code
 */
export function usePreviewCode(code: string, previewMeta: PreviewMeta = {}) {
  const { startLine, endLine } = previewMeta;
  return useMemo(() => {
    const codeParts = code.split('\n');
    const treatedStartIndex = (startLine ?? 1) - 1;
    const treatedEndIndex = endLine ?? code.length;
    return codeParts.slice(treatedStartIndex, treatedEndIndex).join('\n');
  }, [code, startLine, endLine]);
}
