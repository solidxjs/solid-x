import { ParentComponent, createContext, useContext } from 'solid-js';
import { SetStoreFunction, createStore } from 'solid-js/store';
import { isServer } from 'solid-js/web';

export type ActiveAnchor = Record<
  string,
  {
    isActive?: boolean;
    aboveHalfViewport: boolean;
    index: number;
    insideHalfViewport: boolean;
  }
>;

const ActiveAnchorContext = createContext<ActiveAnchor>({});
const SetActiveAnchorContext = createContext<SetStoreFunction<ActiveAnchor>>();

const IntersectionObserverContext = createContext<IntersectionObserver | null>(null);
const slugs = new WeakMap();
const SlugsContext = createContext<WeakMap<object, unknown>>(slugs);

export const useActiveAnchor = () => useContext(ActiveAnchorContext);
export const useSetActiveAnchor = () => useContext(SetActiveAnchorContext);

export const useIntersectionObserver = () => useContext(IntersectionObserverContext);
export const useSlugs = () => useContext(SlugsContext);

export const ActiveAnchorProvider: ParentComponent = (props) => {
  const [activeAnchor, setActiveAnchor] = createStore<ActiveAnchor>({});
  let observerRef: IntersectionObserver | null = null;
  if (!isServer) {
    observerRef = new IntersectionObserver(
      (entries) => {
        setActiveAnchor((f) => {
          const ret = { ...f };

          for (const entry of entries) {
            if (entry?.rootBounds && slugs.has(entry.target)) {
              const [slug, index] = slugs.get(entry.target);
              const aboveHalfViewport =
                entry.boundingClientRect.y + entry.boundingClientRect.height <=
                entry.rootBounds.y + entry.rootBounds.height;
              const insideHalfViewport = entry.intersectionRatio > 0;
              ret[slug] = {
                index,
                aboveHalfViewport,
                insideHalfViewport,
              };
            }
          }

          let activeSlug = '';
          let smallestIndexInViewport = Infinity;
          let largestIndexAboveViewport = -1;
          for (const s in ret) {
            ret[s].isActive = false;
            if (ret[s].insideHalfViewport && ret[s].index < smallestIndexInViewport) {
              smallestIndexInViewport = ret[s].index;
              activeSlug = s;
            }
            if (
              smallestIndexInViewport === Infinity &&
              ret[s].aboveHalfViewport &&
              ret[s].index > largestIndexAboveViewport
            ) {
              largestIndexAboveViewport = ret[s].index;
              activeSlug = s;
            }
          }

          if (ret[activeSlug]) ret[activeSlug].isActive = true;
          return ret;
        });
      },
      {
        rootMargin: '0px 0px -50%',
        threshold: [0, 1],
      },
    );
  }
  return (
    <ActiveAnchorContext.Provider value={activeAnchor}>
      <SetActiveAnchorContext.Provider value={setActiveAnchor}>
        <SlugsContext.Provider value={slugs}>
          <IntersectionObserverContext.Provider value={observerRef}>
            {props.children}
          </IntersectionObserverContext.Provider>
        </SlugsContext.Provider>
      </SetActiveAnchorContext.Provider>
    </ActiveAnchorContext.Provider>
  );
};
