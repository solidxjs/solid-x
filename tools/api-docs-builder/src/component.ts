import path from 'node:path';
import { TypescriptProject } from './project';
import { writePrettifiedFile } from './utils';
import { ComponentDoc, parse as parseComponent } from './parsers/component';

export type ComponentApi = ComponentDoc & {
  name: string;
  filepath: string;
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
  // Ideally, we expect to have only one component per file
  const componentApi: ComponentApi = {
    name,
    displayName: componentDocs[0].displayName,
    description: componentDocs[0].description,
    filepath: path.relative(workspaceDir, filename),
    props: componentDocs[0].props,
    tags: componentDocs[0].tags,
  };

  await generateApiJSON({ outDir, componentApi, workspaceDir });
  return componentApi;
}
