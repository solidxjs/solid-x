export const componentModules = {
  'Badge': () => import('@solid-x/material/Badge')
};
export type ModuleName = (keyof typeof componentModules);
