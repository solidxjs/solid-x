import { highlight, languages, LanguageMap } from 'prismjs';
import Editor from 'react-simple-code-editor';

import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

type Props = {
  code: string;
  language: 'jsx' | 'tsx';
  onCodeChange: (code: string) => void;
};
export const DemoEditor = ({ code, language, onCodeChange }: Props) => {
  return (
    <div
      className="
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
      <style jsx global>{`
        .demo-editor-textarea:focus-visible,
        .demo-editor-textarea.focus-visible {
          outline: none !important;
        }
      `}</style>
      <Editor
        value={code}
        onValueChange={onCodeChange}
        highlight={(code) => highlight(code, (languages as LanguageMap)[language], language)}
        padding="1rem"
        style={{
          fontFeatureSettings: '"rlig" 1,"calt" 1,"ss01" 1',
          fontSize: '0.925em',
          fontWeight: '500',
          WebkitFontSmoothing: 'auto',
        }}
        textareaClassName="demo-editor-textarea"
      />
    </div>
  );
};
