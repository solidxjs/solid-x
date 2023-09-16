import { Accessor } from 'solid-js';

export type Action<T> = (payload: T) => void;
export type ChangePayload<T> = {
  previousValue?: T;
  value?: T;
};
export type MaybeAccessor<T> = T | Accessor<T>;
