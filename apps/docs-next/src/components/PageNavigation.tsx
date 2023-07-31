import { Link } from '@solidjs/router';
import _ from 'lodash';
import { Show } from 'solid-js';

type PageNavigationProps = {
  href?: string;
  title?: string;
  type: 'previous' | 'next';
};

export const PageNavigation = (props: PageNavigationProps) => (
  <dl classList={{
    'ml-auto': props.type === 'next',
    'text-right': props.type === 'next',
    'mr-auto': props.type === 'previous',
    'text-left': props.type === 'previous',
  }}>
    <dt class="font-display text-sm font-medium text-gray-900 dark:text-white">{
      _.capitalize(props.type)
    }</dt>
    <dd class="mt-1">
      <Link
        href={props.href ?? '#'}
        class="text-base font-semibold text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
      >
        <Show when={props.type === 'previous'}>
          <span aria-hidden="true" class="mr-1">
            &larr;
          </span>
        </Show>
        <span>{props.title ?? 'Untitled'}</span>
        <Show when={props.type === 'next'}>
          <span aria-hidden="true" class="ml-1">
            &rarr;
          </span>
        </Show>
      </Link>
    </dd>
  </dl>
);
