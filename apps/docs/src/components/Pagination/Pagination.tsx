import _ from 'lodash';
import { Show } from 'solid-js';
import { A as Link } from 'solid-start';
import styles from './Pagination.module.scss';

type PaginationProps = {
  href?: string;
  title?: string;
  type: 'previous' | 'next';
};

export const Pagination = (props: PaginationProps) => (
  <dl
    classList={{
      [styles.containerNext]: props.type === 'next',
      [styles.containerPrevious]: props.type === 'previous',
    }}>
    <dt class={styles.heading}>{_.capitalize(props.type)}</dt>
    <dd>
      <Link href={props.href ?? '#'} class={styles.link}>
        <Show when={props.type === 'previous'}>
          <span aria-hidden="true" class={styles.linkArrowPrevious}>
            &larr;
          </span>
        </Show>
        <span>{props.title ?? 'Untitled'}</span>
        <Show when={props.type === 'next'}>
          <span aria-hidden="true" class={styles.linkArrowNext}>
            &rarr;
          </span>
        </Show>
      </Link>
    </dd>
  </dl>
);
