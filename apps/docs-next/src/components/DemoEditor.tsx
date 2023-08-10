import { Highlighter, IThemedToken, getHighlighter } from 'shiki';
import { createSignal, onMount } from 'solid-js';
import { isServer } from 'solid-js/web';
import Editor from 'solid-simple-code-editor';

let highlighterPromise = Promise.resolve(undefined) as unknown as Promise<Highlighter>;
if (!isServer) {
  highlighterPromise = getHighlighter({
    langs: ['jsx', 'tsx'],
    themes: ['github-light', 'github-dark'],
    paths: {
      wasm: '/shiki',
      languages: '/shiki/languages',
      themes: '/shiki/themes',
    },
  });
}

const tokensToHTMLString = (tokens?: IThemedToken[][]) => {
  if (!tokens) return undefined;

  let content = '';
  for (const line of tokens) {
    if (content) content += '\n';
    content += '<span class="line">';
    for (const token of line) {
      content += `<span style="color: ${token.color}">${token.content}</span>`;
    }
    content += '</span>';
  }
  return `<code style="font: inherit">${content}</code>`;
};

type Props = {
  code: string;
  language: 'jsx' | 'tsx';
  onCodeChange: (code: string) => void;
};
export const DemoEditor = (props: Props) => {
  const [highlighter, setHighlighter] = createSignal<Highlighter>();

  onMount(async () => setHighlighter(await highlighterPromise));

  return (
    <div
      class="
        max-h-[min(100%,1000px)]
        overflow-auto
        bg-[var(--sx-demo-editor-background)]
        rounded-xl
        relative
        font-mono
        font-medium
        text-sm
        text-[var(--shiki-color-text)]
      ">
      <Editor
        value={props.code}
        onValueChange={props.onCodeChange}
        highlight={(code) => {
          console.log(highlighter()?.codeToThemedTokens(code, props.language, 'github-dark'));
          console.log(
            highlighter()?.codeToHtml(code, { lang: props.language, theme: 'github-dark' }),
          );
          return tokensToHTMLString(
            highlighter()?.codeToThemedTokens(code, props.language, 'github-dark'),
          );
          // return highlighter()?.codeToHtml(code, { lang: props.language, theme: 'github-dark' });
        }}
        padding="1rem"
        style={{
          'font-feature-settings': '"rlig" 1,"calt" 1,"ss01" 1',
          'font-size': '0.925em',
          'font-weight': '500',
          '-webkit-font-smoothing': 'auto',
        }}
        textareaClass="demo-editor-textarea"
      />
    </div>
  );
};
