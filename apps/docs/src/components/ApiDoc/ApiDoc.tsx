import type { ComponentApi } from '@solid-x/api-docs-builder';
import _ from 'lodash';
import { For, Show } from 'solid-js';
import { useLocation } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import { Heading } from '../Heading/Heading';
import styles from './ApiDoc.module.scss';

const apiData = import.meta.glob<ComponentApi>('/src/data/api/*.json');

export const ApiDoc = () => {
  const componentName = useComponentName();
  const api = createServerData$(
    async (componentName: string) => {
      return await apiData[`/src/data/api/${componentName}.json`]();
    },
    {
      key: () => componentName,
    },
  );
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
    <Heading tag="h3" id={`prop__${props.name}`}>
      <code class="mdx-code">{props.name}</code>
    </Heading>
    <div class={styles.summary}>
      <Show when={props.description}>
        <>
          <div class={styles.summaryItem}>Description</div>
          <div>
            <p>{props.description}</p>
          </div>
        </>
      </Show>
      <div class={styles.summaryItem}>Type</div>
      <div>
        <code class="mdx-code">{props.type}</code>
      </div>
      <Show when={props.isRequired}>
        <>
          <div class={styles.summaryItem}>Required</div>
          <div>
            <code class="mdx-code">true</code>
          </div>
        </>
      </Show>
      <Show when={props.defaultValue}>
        <>
          <div class={styles.summaryItem}>Default</div>
          <div>
            <code class="mdx-code">{props.defaultValue}</code>
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
