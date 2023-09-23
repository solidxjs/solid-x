import path from 'node:path';
import { TypescriptProject } from './project';
import { writePrettifiedFile } from './utils';
import { ComponentDoc, parse as parseComponent } from './parsers/component';

export type ComponentApi = ComponentDoc & {
  name: string;
  filename: string;
};

type GenerateApiJSONOptions = {
  outDir: string;
  componentApi: ComponentApi;
  workspaceDir: string;
};
async function generateApiJSON({ outDir, componentApi, workspaceDir }: GenerateApiJSONOptions) {
  const apiFile = path.resolve(outDir, `${componentApi.name}.json`);
  await writePrettifiedFile(
    apiFile,
    JSON.stringify(componentApi),
    path.join(workspaceDir, '.prettierrc.json'),
  );
}

type GenerateComponentApiOptions = {
  componentInfo: {
    name: string;
    filename: string;
  };
  project: TypescriptProject;
  outDir: string;
  workspaceDir: string;
};
export async function generateComponentApi({
  componentInfo,
  project,
  outDir,
  workspaceDir,
}: GenerateComponentApiOptions) {
  const { filename, name } = componentInfo;
  const componentDocs = parseComponent(filename, project.program);
  if (componentDocs.length === 0) return null;
  const componentApi: ComponentApi = {
    // Ideally, we expect to have only one component per file
    ...componentDocs[0],
    filename,
    name,
  };

  await generateApiJSON({ outDir, componentApi, workspaceDir });
  return componentApi;
}
