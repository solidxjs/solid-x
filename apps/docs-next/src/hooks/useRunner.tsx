/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSXElement, createEffect, createSignal } from 'solid-js';
import { transform } from 'sucrase';

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
};
type UseRunnerReturn = {
  element: JSXElement | null;
  error: string | null;
};

/**
 * Greatly inspired by https://github.com/nihgwu/react-runner/blob/master/packages/react-runner
 * Runs the code dynamically and generates DOM element.
 *
 * @param param0.code The code to run
 * @param param0.scope The import scope
 * @returns the result of the code run
 */
export const useRunner = (props: Props) => {
  let element: JSXElement | undefined;
  const [result, setResult] = createSignal<UseRunnerReturn>({
    element: element,
    error: null,
  });

  createEffect(async () => {
    try {
      element = await generateElement({
        code: props.code,
        props: props.props,
        scope: props.scope,
      });
      setResult({
        element,
        error: null,
      });
    } catch (err: any) {
      setResult({
        element: props.preserveOnError ? element : err.toString(),
        error: (err as Error).message,
      });
    }
  });

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
    ...globals,
  };
  const fn = new Function(...Object.keys(finalScope), code);
  return fn(...Object.values(finalScope));
};

const compileCode = (code: string) =>
  transform(code, {
    transforms: ['jsx', 'typescript'],
    jsxImportSource: 'solid-js',
    jsxRuntime: 'automatic',
  }).code?.replace(/"use strict";/, '') ?? '';

const generateElement = async ({ code, props, scope }: Props): Promise<JSXElement | null> => {
  if (!code.trim()) return null;

  const compiledCode = compileCode(code);
  const exports: Scope = {};

  evalCode(compiledCode, { ...scope, exports });

  const result: unknown = exports['default'];

  if (typeof result === 'function') {
    const h = (await import('solid-js/h')).default;
    return h(result, props);
  }
  return null;
};
