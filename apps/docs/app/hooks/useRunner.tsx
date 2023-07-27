/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, ReactElement, useEffect, useRef, useState } from 'react';
import { transform } from '@babel/standalone';
import presetSolid from 'babel-preset-solid';
import { Component as SolidComponent } from 'solid-js';
import { render as renderSolid } from 'solid-js/web';

export type Globals = Record<string, any>;
export type Scope = Globals & {
  imports?: Record<string, any>;
  globalImports?: Record<string, any>;
};
type Props = {
  code: string;
  props?: Record<string, any>;
  scope?: Scope;
  preserveOnError?: boolean;
  onRendered?: () => void;
  onRuntimeError?: (error: Error) => void;
};
type UseRunnerReturn = {
  element: ReactElement | null;
  error: string | null;
};

type SolidToReactProps = {
  children: SolidComponent;
  onError?: (error: Error) => void;
  onRendered?: () => void;
};
const SolidToReact = ({ children, onError, onRendered }: SolidToReactProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const errorRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    let dispose: (() => void) | undefined;

    try {
      dispose = renderSolid(() => children({}), ref.current);
    } catch (e) {
      errorRef.current = true;
      onError?.(e as Error);
    }

    return () => dispose?.();
  }, [children]);

  useEffect(() => {
    if (!errorRef.current) {
      onRendered?.();
    }
    errorRef.current = false;
  });

  return <div ref={ref}></div>;
};

/**
 * Greatly inspired by https://github.com/nihgwu/react-runner/blob/master/packages/react-runner
 * Runs the code dynamically and generates DOM element.
 *
 * @param param0.code The code to run
 * @param param0.scope The import scope
 */
export const useRunner = ({
  code,
  preserveOnError = true,
  props,
  scope,
  onRendered,
  onRuntimeError,
}: Props) => {
  const elementRef = useRef<ReactElement | null>(null);
  const [result, setResult] = useState<UseRunnerReturn>({
    element: elementRef.current,
    error: null,
  });

  useEffect(() => {
    try {
      const element = generateElement({ code, props, scope, onRendered, onRuntimeError });
      elementRef.current = element;
      setResult({
        element,
        error: null,
      });
    } catch (err: any) {
      setResult({
        element: preserveOnError ? elementRef.current : err.toString(),
        error: (err as Error).message,
      });
    }
  }, [code, preserveOnError, props, scope]);

  return result;
};

/**
 * Helper methods
 */
const evalCode = (code: string, scope: Scope) => {
  const { globalImports = {}, imports = {}, ...globals } = scope;
  const finalScope: Scope = {
    require: (module: string) => {
      if (module in globalImports) {
        return globalImports[module];
      }
      if (module in imports) {
        return imports[module];
      }
      throw new Error(`Module not found: ${module}`);
    },
    Fragment,
    ...globals,
  };
  const fn = new Function(...Object.keys(finalScope), code);
  return fn(...Object.values(finalScope));
};

const compileCode = (code: string) =>
  transform(code, {
    presets: [presetSolid, 'typescript', 'react', 'es2015'],
    filename: 'demo.jsx',
  }).code?.replace(/"use strict";/, '') ?? '';

const generateElement = ({
  code,
  scope,
  onRendered,
  onRuntimeError,
}: Props): ReactElement | null => {
  if (!code.trim()) return null;

  const compiledCode = compileCode(code);
  const exports: Scope = {};

  evalCode(compiledCode, { ...scope, exports });

  const result: unknown = exports['default'];

  if (typeof result === 'function') {
    return (
      <SolidToReact onError={onRuntimeError} onRendered={onRendered}>
        {result as SolidComponent}
      </SolidToReact>
    );
  }
  return null;
};
