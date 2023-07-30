import { parse, type Options as AcornOptions } from 'acorn';

const defaultAcornOptions: AcornOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module'
};

export const jsToTreeNode = (jsString: string, acornOpts: AcornOptions = defaultAcornOptions) => ({
  type: 'mdxjsEsm',
  value: '',
  data: {
    estree: {
      ...parse(jsString, acornOpts),
      body: [],
      sourceType: 'module',
      type: 'Program',
    }
  }
});
