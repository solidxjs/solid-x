import _ from 'lodash';
import { ParentProps, createContext, createEffect, createMemo, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { useLocation } from 'solid-start';
import * as sectionsData from '~/data/sections';
import { Page, Section } from '~/root.types';

type NavigationStateData = {
  sections: () => readonly Section[];
  previousPage: () => Page | undefined;
  nextPage: () => Page | undefined;
};

const getRootPath = (pathname: string) => pathname.match(/^\/([a-z]+)\/.*$/)?.[1] ?? '';
export const NavigationStateContext = createContext<NavigationStateData>({ sections: () => [], previousPage: () => undefined, nextPage: () => undefined });

export const NavigationStateProvider = (props: ParentProps) => {
  const [store, setStore] = createStore<{ sections: Section[], prevPage?: Page, nextPage?: Page }>({
    sections: []
  });
  const data: NavigationStateData = {
    sections() {
      return store.sections;
    },
    nextPage() {
      return store.nextPage;
    },
    previousPage() {
      return store.prevPage;
    },
  };
  
  createEffect(() => {
    const { pathname } = useLocation();
    const rootPath = getRootPath(pathname);
    const sections: Section[] = [];
    if (rootPath in sectionsData) {
      sections.push(...sectionsData[rootPath as keyof typeof sectionsData]);
    }
    
    const flatten = (item: Section) => [item, _.flatMapDeep<Section, Section>(item.links, flatten)];
    const allLinks = createMemo(() => _.flatMapDeep<Section, Section>(sections, flatten).filter(i => i.type === 'page'));
    const linkIndex = createMemo(() => allLinks().findIndex(link => link.href === pathname));
    const previousPage = createMemo(() => allLinks()[linkIndex() - 1] as Page | undefined);
    const nextPage = createMemo(() => allLinks()[linkIndex() + 1] as Page | undefined);
    
    setStore({
      nextPage: nextPage(),
      prevPage: previousPage(),
      sections
    });
  });

  return (
    <NavigationStateContext.Provider value={data}>
      {props.children}
    </NavigationStateContext.Provider>
  );
};

export const useNavigationStateContext = () => useContext(NavigationStateContext);
