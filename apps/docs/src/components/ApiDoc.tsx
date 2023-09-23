import type { ComponentApi } from '@solid-x/api-docs-builder';
import _ from 'lodash';
import { For, Show, createResource } from 'solid-js';
import { useLocation } from 'solid-start';
import { Heading } from './Heading';

const apiData = import.meta.glob<ComponentApi>('/src/data/api/*.json');

export const ApiDoc = () => {
  const componentName = useComponentName();
  const [api] = createResource(async () => {
    return await apiData[`/src/data/api/${componentName}.json`]();
  });
  return (
    <section>
      <For each={Object.values(api()?.props ?? {})}>
        {(item) => (
          <PropSection
            name={item.name}
            type={item.type.name}
            defaultValue={item.defaultValue.value}
            description={item.description}
            isRequired={item.required}
          />
        )}
      </For>
    </section>
  );
};

type PropSectionProps = {
  name: string;
  type: string;
  description?: string;
  defaultValue?: string;
  isRequired?: boolean;
};
const PropSection = (props: PropSectionProps) => (
  <div>
    <Heading tag="h3" id={`prop__${props.name}`} context={{ index: 0 }}>
      <code>{props.name}</code>
    </Heading>
    <div class="grid grid-cols-[auto_1fr] gap-y-5 gap-x-10 py-5">
      <Show when={props.description}>
        <>
          <div class="font-semibold">Description</div>
          <div>
            <p>{props.description}</p>
          </div>
        </>
      </Show>
      <div class="font-semibold">Type</div>
      <code>
        <p>{props.type}</p>
      </code>
      <Show when={props.isRequired}>
        <>
          <div class="font-semibold">Required</div>
          <div>
            <code>true</code>
          </div>
        </>
      </Show>
      <Show when={props.defaultValue}>
        <>
          <div class="font-semibold">Default</div>
          <div>
            <code>{props.defaultValue}</code>
          </div>
        </>
      </Show>
    </div>
  </div>
);

function useComponentName() {
  const { pathname } = useLocation();
  const componentName = pathname.split('/').at(-1);
  return _.capitalize(componentName);
}
