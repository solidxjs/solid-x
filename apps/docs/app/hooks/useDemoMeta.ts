import { ModuleName } from '@/app/utils/modules';
import { createContext, useContext } from 'react';
import { PreviewMeta } from './usePreviewCode';

type DemoMetaContext = {
  sourceCode?: string;
  previewMeta?: PreviewMeta;
  components?: ModuleName[];
};

const DemoMetaContext = createContext<DemoMetaContext>({});
export const DemoMetaProvider = DemoMetaContext.Provider;
export function useDemoMeta() {
  return useContext(DemoMetaContext);
}
