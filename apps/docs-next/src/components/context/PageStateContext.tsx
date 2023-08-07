import { ParentProps, createContext, createEffect, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { useLocation } from 'solid-start';

type Section = {
  depth: number;
  slug: string;
  text: string;
};

type PageStateData = {
  sections: () => readonly Section[];
  addSection: (text: string, slug: string, depth: number) => void;
};

export const PageStateContext = createContext<PageStateData>({
  sections: () => [],
  addSection: () => undefined,
});

export const PageStateProvider = (props: ParentProps) => {
  const [store, setStore] = createStore<{ sections: Section[]; path: string }>({
    sections: [],
    path: '',
  });

  const data: PageStateData = {
    sections() {
      return store.sections;
    },
    addSection(text, slug, depth) {
      setStore('sections', (sections) => [...new Set([...sections, { depth, slug, text }])]);
    },
  };

  createEffect(() => {
    const { pathname } = useLocation();
    setStore('sections', []);
    setStore('path', pathname);
  });

  return <PageStateContext.Provider value={data}>{props.children}</PageStateContext.Provider>;
};

export const usePageState = () => useContext(PageStateContext);
