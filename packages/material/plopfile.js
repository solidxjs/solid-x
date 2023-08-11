
/**
 * @param {import('plop').NodePlopAPI} plop 
 */
export default function (plop) {
  plop.setGenerator('component', {
    description: 'Generates a component directory and files',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:',
      },
    ],
    actions(answers) {
      /**
       * @type {import('plop').ActionType[]}
       */
      const actions = [];

      if (!answers) return actions;

      const { componentName } = answers;
      actions.push({
        type: 'addMany',
        templateFiles: 'plop/component/**',
        destination: './src/{{componentName}}',
        base: 'plop/component',
        data: { componentName },
        abortOnFail: true,
      });
      
      return actions;
    }
  });
};
