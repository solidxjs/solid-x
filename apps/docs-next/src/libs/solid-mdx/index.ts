import {
  JSX,
  ParentProps,
  createComponent,
  createContext,
  createMemo,
  mergeProps,
  splitProps,
  useContext
} from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { HTMLElements, SVGElements } from './elements';

export type MDXComponents = {
  [key in keyof JSX.IntrinsicElements]: (
    props: JSX.IntrinsicElements[key]
  ) => JSX.Element;
};

export type MDXProps<P = any> = ParentProps<{
  components?:
  | MDXComponents
  | {
    [k: string]: (props: P) => JSX.Element;
  };
}>;

export type MDXComponent = (props: MDXProps) => JSX.Element;

export const MDXContext = createContext<MDXComponents>(
  [...HTMLElements, ...SVGElements].reduce((acc, el) => {
    acc[el] = (props: JSX.IntrinsicElements[typeof el]) => {
      return createComponent(
        Dynamic,
        mergeProps(props, {
          component: el,
        })
      );
    };

    return acc;
  }, {} as MDXComponents)
);
export const MDXProvider: MDXComponent = (props) => {
  const context = useContext(MDXContext);
  const [local, other] = splitProps(props, ['children']);
  const value = createMemo(() => ({ ...context, ...other.components }));

  return createComponent(MDXContext.Provider, {
    get value() {
      return value();
    },
    get children() {
      return local.children;
    },
  });
};

export const useMDXComponents = () => {
  return useContext(MDXContext);
};
