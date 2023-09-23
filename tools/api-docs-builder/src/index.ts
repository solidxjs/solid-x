import { program } from 'commander';
import { minimatch } from 'minimatch';
import path from 'node:path';
import { generateComponentApi } from './component';
import { PROJECTS_METADATA, Project, createProjectBuilder } from './project';
import { findComponents } from './utils';

type CommandOptions = {
  files?: string;
  outDir: string;
  project: Project;
  workspaceDir: string;
};

async function main(options: CommandOptions) {
  // Process options
  const {
    files: filesPattern,
    outDir: rawOutDir,
    project: currentProject,
    workspaceDir: rawWorkspaceDir,
  } = options;
  const outDir = path.isAbsolute(rawOutDir) ? rawOutDir : path.relative(process.cwd(), rawOutDir);
  const workspaceDir = path.isAbsolute(rawWorkspaceDir)
    ? rawWorkspaceDir
    : path.relative(process.cwd(), rawWorkspaceDir);

  // Create api builder
  const projectBuilder = createProjectBuilder({ workspaceDir });
  const project = projectBuilder(currentProject);

  // Generate API json for components
  const projectComponents = findComponents(
    path.join(workspaceDir, 'packages', currentProject, 'src'),
  ).filter((component) => {
    if (
      // Ignore theme and utils modules
      minimatch(component.filename, '**/theme/**') ||
      minimatch(component.filename, '**/utils/**') ||
      // Ignore component stories, tests, and themes
      minimatch(component.filename, '**/__stories__/**') ||
      minimatch(component.filename, '**/__tests__/**') ||
      minimatch(component.filename, '**/__themes__/**')
    )
      return false;

    // No pattern provided
    if (filesPattern == null) return true;

    return minimatch(component.filename, filesPattern);
  });

  projectComponents.map(async ({ filename }) => {
    try {
      const componentInfo = PROJECTS_METADATA[currentProject].getComponentInfo(filename);
      console.log(`Generating API for - ${componentInfo.name}`);
      await generateComponentApi({ componentInfo, project, outDir, workspaceDir });
    } catch (e) {
      (e as Error).message = `${path.relative(process.cwd(), filename)}: ${(e as Error).message}`;
      throw e;
    }
  });
}

program
  .name('api-docs-builder')
  .description('generate documentation data from the codebase')
  .option('-f, --files <string>', 'Only generate files for component matching this glob pattern')
  .option(
    '-o, --out-dir <string>',
    'Output directory for the generated API data',
    path.resolve(process.cwd(), 'src', 'data', 'api'),
  )
  .option('-p, --project <string>', 'Project name (accepted options: material)', 'material')
  .option(
    '-w, --workspace-dir <string>',
    'Workspace root directory',
    path.resolve(__dirname, '../../..'),
  )
  .action(main)
  .parseAsync()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
