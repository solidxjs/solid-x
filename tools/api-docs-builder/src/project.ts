import { readFileSync } from 'fs-extra';
import path from 'node:path';
import ts from 'typescript';
import { extractPackageFile } from './utils';

export type Project = 'material';
export type ProjectMetadata = {
  project: Project;
  getComponentInfo(filename: string): {
    name: string;
    filename: string;
  };
};

export const PROJECTS_METADATA: Record<Project, ProjectMetadata> = {
  material: {
    project: 'material',
    getComponentInfo(filename) {
      const { name } = extractPackageFile(filename);
      return {
        name: name ?? '',
        filename,
      };
    },
  },
};

export type CreateTypescriptProjectOptions = {
  /**
   * The name of the project.
   */
  name: string;

  /**
   * The absolute path of the root directory of the project.
   */
  rootDir: string;

  /**
   * The relative path of the tsconfig.json to be used.
   * @default 'tsconfig.build.json'
   */
  tsConfigPath?: string;
};

export type TypescriptProject = {
  /**
   * The name of the project.
   */
  name: string;

  /**
   * The absolute path of the root directory of the project.
   */
  rootDir: string;

  /**
   * The TS program for the current project.
   */
  program: ts.Program;

  /**
   * The TS checker for the current TS program.
   */
  checker: ts.TypeChecker;
};

export function createTypescriptProject({
  name,
  rootDir,
  tsConfigPath: _tsConfigPath = 'tsconfig.build.json',
}: CreateTypescriptProjectOptions) {
  // Read the tsconfig file and throw error if fails
  const tsConfigPath = path.join(rootDir, _tsConfigPath);
  const { config, error } = ts.readConfigFile(tsConfigPath, (filepath) =>
    readFileSync(filepath).toString(),
  );
  if (error) throw error;

  // Parse the read tsconfig file and throw error if fails
  const { errors, fileNames, options } = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    path.dirname(tsConfigPath),
  );
  if (errors.length) throw errors[0];

  // Create a ts program and type checker
  const program = ts.createProgram({
    rootNames: fileNames,
    options: options,
  });
  const checker = program.getTypeChecker();

  return {
    name,
    rootDir,
    program,
    checker,
  };
}

type CreateProjectBuilderOptions = {
  workspaceDir: string;
};
export function createProjectBuilder({ workspaceDir }: CreateProjectBuilderOptions) {
  const projectsCache = new Map<Project, TypescriptProject>();
  return (projectName: Project) => {
    // Return the project if it is cached.
    if (projectsCache.has(projectName)) return projectsCache.get(projectName)!;

    console.log(`Building project - ${projectName}...`);

    const project = createTypescriptProject({
      name: projectName,
      rootDir: path.join(workspaceDir, 'packages', projectName),
    });
    projectsCache.set(projectName, project);
    return project;
  };
}
