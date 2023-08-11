import { clsx } from 'clsx';
import {
  For,
  JSXElement,
  Match,
  Show,
  Switch,
  createEffect,
  createMemo,
  createSignal,
  on,
  onCleanup,
  onMount,
} from 'solid-js';
import { isServer } from 'solid-js/web';
import { useNavigate } from 'solid-start';
import { Anchor } from './Anchor';
import { Input } from './Input';

type SearchResult = {
  children: () => JSXElement;
  id: string;
  prefix?: () => JSXElement;
  route: string;
};

type SearchProps = {
  class?: string;
  overlayClassName?: string;
  value: string;
  onInput: (newValue: string) => void;
  onActive?: (active: boolean) => void;
  loading?: boolean;
  error?: boolean;
  results: SearchResult[];
};

const INPUTS = ['input', 'select', 'button', 'textarea'];

export const Search = (props: SearchProps) => {
  const [show, setShow] = createSignal(false);
  const [active, setActive] = createSignal(0);
  const [focused, setFocused] = createSignal(false);
  const value = createMemo(() => props.value);
  const navigate = useNavigate();
  const [iconContent, setIconContent] = createSignal<JSXElement>(null);

  let inputElement: HTMLInputElement | undefined;
  let ulElement: HTMLUListElement | undefined;

  const handleGlobalKeyDown = (e: globalThis.KeyboardEvent): void => {
    const activeElement = document.activeElement as HTMLElement;
    const tagName = activeElement?.tagName.toLowerCase();
    if (!inputElement || !tagName || INPUTS.includes(tagName) || activeElement?.isContentEditable)
      return;
    if (
      e.key === '/' ||
      (e.key === 'k' && (e.metaKey /* for Mac */ || /* for non-Mac */ e.ctrlKey))
    ) {
      e.preventDefault();
      inputElement.focus();
    } else if (e.key === 'Escape') {
      setShow(false);
      inputElement.blur();
    }
  };

  onMount(() => {
    if (isServer) return;
    window.addEventListener('keydown', handleGlobalKeyDown);

    setIconContent(
      navigator.userAgent.includes('Macintosh') ? (
        <>
          <span class="text-xs">⌘</span>K
        </>
      ) : (
        'CTRL K'
      ),
    );
  });

  onCleanup(() => {
    if (isServer) return;
    window.removeEventListener('keydown', handleGlobalKeyDown);
  });

  createEffect(on(value, () => setActive(0)));

  const finishSearch = () => {
    inputElement?.blur();
    props.onInput('');
    setShow(false);
  };

  const handleActive = (e: { currentTarget: { dataset: DOMStringMap } }) => {
    const { index } = e.currentTarget.dataset;
    setActive(Number(index));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown': {
        if (active() + 1 < props.results.length) {
          const el = ulElement?.querySelector<HTMLAnchorElement>(
            `li:nth-of-type(${active() + 2}) > a`,
          );
          if (el) {
            e.preventDefault();
            handleActive({ currentTarget: el });
            el.focus();
          }
        }
        break;
      }
      case 'ArrowUp': {
        if (active() - 1 >= 0) {
          const el = ulElement?.querySelector<HTMLAnchorElement>(`li:nth-of-type(${active()}) > a`);
          if (el) {
            e.preventDefault();
            handleActive({ currentTarget: el });
            el.focus();
          }
        }
        break;
      }
      case 'Enter': {
        const result = props.results[active()];
        if (result) {
          navigate(result.route);
          finishSearch();
        }
        break;
      }
      case 'Escape': {
        setShow(false);
        inputElement?.blur();
        break;
      }
    }
  };

  const shouldRenderList = createMemo(() => show() && Boolean(props.value));

  return (
    <div class={clsx('relative md:w-64', props.class)}>
      <Show when={shouldRenderList()}>
        <div class="fixed inset-0 z-10" onClick={() => setShow(false)} />
      </Show>

      <Input
        ref={inputElement}
        value={props.value}
        onInput={(e) => {
          const { value } = e.target;
          props.onInput(value);
          setShow(Boolean(value));
        }}
        onFocus={() => {
          props.onActive?.(true);
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        type="search"
        placeholder="Search documentation..."
        onKeyDown={handleKeyDown}
        suffix={
          <kbd
            class={clsx(
              'absolute my-1.5 select-none ltr:right-1.5 rtl:left-1.5',
              'h-5 rounded bg-white px-1.5 font-mono text-[10px] font-medium text-gray-500',
              'border dark:border-gray-100/20 dark:bg-dark/50',
              'contrast-more:border-current contrast-more:text-current contrast-more:dark:border-current',
              'items-center gap-1 transition-opacity',
              props.value
                ? 'z-20 flex cursor-pointer hover:opacity-70'
                : 'pointer-events-none hidden sm:flex',
            )}
            title={props.value ? 'Clear' : undefined}
            onClick={() => {
              props.onInput('');
            }}>
            {props.value && focused() ? 'ESC' : iconContent()}
          </kbd>
        }
      />

      <Show when={shouldRenderList()}>
        <ul
          class={clsx(
            // Using bg-white as background-color when the browser didn't support backdrop-filter
            'border border-gray-200 bg-white text-gray-100 dark:border-neutral-800 dark:bg-neutral-900',
            'absolute top-full z-20 mt-2 overflow-auto overscroll-contain rounded-xl py-2.5 shadow-xl',
            'max-h-[min(calc(50vh-11rem-env(safe-area-inset-bottom)),400px)]',
            'md:max-h-[min(calc(100vh-5rem-env(safe-area-inset-bottom)),400px)]',
            'inset-x-0 ltr:md:left-auto rtl:md:right-auto',
            'contrast-more:border contrast-more:border-gray-900 contrast-more:dark:border-gray-50',
            props.overlayClassName,
          )}
          ref={ulElement}
          style={{
            transition: 'max-height .2s ease', // don't work with tailwindcss
          }}>
          <Switch
            fallback={
              <span class="block select-none p-8 text-center text-sm text-gray-400">
                No results found.
              </span>
            }>
            <Match when={props.error}>
              <span class="flex select-none justify-center gap-2 p-8 text-center text-sm text-red-500">
                Failed to load search index.
              </span>
            </Match>
            <Match when={props.loading}>
              <span class="flex select-none justify-center gap-2 p-8 text-center text-sm text-gray-400">
                Loading...
              </span>
            </Match>
            <Match when={props.results.length > 0}>
              <For each={props.results}>
                {({ route, prefix, children }, index) => (
                  <>
                    {prefix?.()}
                    <li
                      class={clsx(
                        'mx-2.5 break-words rounded-md',
                        'contrast-more:border',
                        index() === active()
                          ? 'bg-primary-500/10 text-primary-600 contrast-more:border-primary-500'
                          : 'text-gray-800 contrast-more:border-transparent dark:text-gray-300',
                      )}>
                      <Anchor
                        class="block scroll-m-12 px-2.5 py-2"
                        href={route}
                        data-index={index()}
                        onFocus={handleActive}
                        onMouseMove={handleActive}
                        onClick={finishSearch}
                        onKeyDown={handleKeyDown}>
                        {children()}
                      </Anchor>
                    </li>
                  </>
                )}
              </For>
            </Match>
          </Switch>
        </ul>
      </Show>
    </div>
  );
};
