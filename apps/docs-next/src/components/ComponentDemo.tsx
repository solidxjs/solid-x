import { ComponentProps, createSignal, onMount } from 'solid-js';
import { ModuleName, componentModules } from '~/utils/modules';
import { LiveDemo } from './LiveDemo';

type LiveDemoProps = ComponentProps<typeof LiveDemo>;
type PickedLiveDemoProps = Pick<
  LiveDemoProps,
  'height' | 'previewMeta' | 'language' | 'sourceCode' | 'width'
>;
type Scope = Omit<LiveDemoProps['scope'], 'globalImports'>;
type Props = Partial<PickedLiveDemoProps> & {
  components?: ModuleName[];
  scope?: Scope;
};
export const ComponentDemo = (props: Props) => {
  const [globalImports, setGlobalImports] = createSignal<Record<string, unknown>>({});

  onMount(() => {
    async function loadModules() {
      const componentsPromise: Promise<unknown>[] = [];
      const components = props.components ?? [];
      for (const comp of components) {
        componentsPromise.push(componentModules[comp]());
      }
      const solidJSPromise = import('solid-js');
      const solidWebPromise = import('solid-js/web');

      const [solidJS, solidWeb, ...loadedComponents] = await Promise.all([
        solidJSPromise,
        solidWebPromise,
        ...componentsPromise,
      ]);
      const componentImports = components.reduce(
        (acc, component, index) => ({
          ...acc,
          [`@solid-x/material/${component}`]: loadedComponents[index],
        }),
        {},
      );

      setGlobalImports({
        'solid-js': solidJS,
        'solid-js/web': solidWeb,
        ...componentImports,
      });
    }

    loadModules();
  });

  return (
    <LiveDemo
      scope={{
        globalImports: globalImports(),
        imports: props.scope,
      }}
      sourceCode={props.sourceCode ?? ''}
      previewMeta={props.previewMeta}
      language={props.language ?? 'jsx'}
      width={props.width ?? '800px'}
      height={props.height ?? '500px'}
    />
  );
};
