import { Show } from 'solid-js';

type Props = {
  children?: string;
  match: string;
};

const HIGHLIGHT_TOKEN = '__@@__';
const HIGHLIGHT_PATTERN = `${HIGHLIGHT_TOKEN}$&${HIGHLIGHT_TOKEN}`;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
const escapeRegExp = (str: string) => str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string

const highlighter = (text: string, match: string) => {
  const escapedMatchText = escapeRegExp(match);
  const highlightedText = text.replace(new RegExp(escapedMatchText, 'gi'), HIGHLIGHT_PATTERN);
  const tokens = highlightedText.split(HIGHLIGHT_TOKEN);
  const nodes = tokens.map((current, index) =>
    index % 2 == 0 ? current : <span class="text-primary-600">{current}</span>,
  );
  return <>{nodes}</>;
};

export const HighlightMatches = (props: Props) => (
  <>
    <Show
      when={props.match.length > 0 && props.children && props.children.length > 0}
      fallback={<>{props.children}</>}>
      {highlighter(props.children!, props.match)}
    </Show>
  </>
);
