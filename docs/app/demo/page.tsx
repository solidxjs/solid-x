'use client';

import { LiveDemo } from '@/app/components/LiveDemo';
import { useDemoMeta } from '@/app/hooks/useDemoMeta';
import { componentModules } from '@/app/utils/modules';
import { useEffect, useState } from 'react';

import '@/styles/globals.css';
import '@/styles/prism-theme.css';

export default function DemoPage() {
  const { components = [], previewMeta, sourceCode } = useDemoMeta();
  const [globalImports, setGlobalImports] = useState({});

  useEffect(() => {
    async function loadSolidX() {
      const componentsPromise: Promise<unknown>[] = [];
      for (const comp of components) {
        componentsPromise.push(componentModules[comp]());
      }
      const solidJSPromise = import('solid-js');
      const solidWebPromise = import('solid-js/web');

      const [
        solidJS,
        solidWeb,
        ...loadedComponents
      ] = await Promise.all([
        solidJSPromise,
        solidWebPromise,
        ...componentsPromise
      ]);
      const componentImports = components.reduce((acc, component, index) => ({
        ...acc,
        [`@solid-x/material/${component}`]: loadedComponents[index]
      }), {});

      setGlobalImports({
        'solid-js': solidJS,
        'solid-js/web': solidWeb,
        ...componentImports
      });
    }

    loadSolidX();
  }, []);

  return (
    <LiveDemo
      scope={{
        globalImports
      }}
      sourceCode={sourceCode}
      previewMeta={previewMeta}
      language="jsx"
      width={'800px'}
      height={'500px'}
    />
  );
}
