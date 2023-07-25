'use client';

import '@/styles/globals.css';
import '@/styles/prism-theme.css';
import * as SolidJS from 'solid-js';
import * as SolidJSWeb from 'solid-js/web';
import * as SolidX from '@solid-x/material';
import { LiveDemo } from './LiveDemo';
import { ComponentProps, useMemo } from 'react';

const globalImports = {
  'solid-js': SolidJS,
  'solid-js/web': SolidJSWeb,
  '@solid-x/material': SolidX,
};

type LiveDemoProps = ComponentProps<typeof LiveDemo>;
type PickedLiveDemoProps = Pick<
  LiveDemoProps,
  'height' | 'previewMeta' | 'language' | 'sourceCode' | 'width'
>;
type Scope = Omit<LiveDemoProps['scope'], 'globalImports'>;
type Props = Partial<PickedLiveDemoProps> & {
  scope?: Scope;
};
export default function ComponentDemo({
  language,
  scope: propScope,
  height,
  previewMeta,
  sourceCode,
  width,
}: Props) {
  const scope = useMemo(() => {
    return {
      ...propScope,
      globalImports,
    };
  }, [propScope]);
  return (
    <LiveDemo
      scope={scope}
      sourceCode={sourceCode ?? ''}
      previewMeta={previewMeta}
      language={language ?? 'jsx'}
      width={width ?? '800px'}
      height={height ?? '500px'}
    />
  );
}
