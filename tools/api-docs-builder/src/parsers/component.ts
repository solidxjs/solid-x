import ts from 'typescript';
import { getFullJsDocComment, getTypeString, isOptional } from './utils';

export type Props = Record<string, PropItem>;
export type PropItem = {
  name: string;
  required: boolean;
  type: {
    name: string;
  };
  description: string;
  defaultValue: unknown;
  tags?: object;
};
export type ComponentDoc = {
  displayName: string;
  filePath: string;
  description: string;
  props: Props;
  tags?: Record<string, string>;
};

/**
 * Parses the provided file if the file exports a component.
 * @param filename The component file name
 * @param program The TS program for parsing the file
 * @returns The object representing the component if the file exports a component
 */
export function parse(filename: string, program: ts.Program) {
  const sourceFile = program.getSourceFile(filename);

  if (!sourceFile) return [];

  const checker = program.getTypeChecker();
  const moduleSymbol = checker.getSymbolAtLocation(sourceFile);

  // skip if not a module
  if (!moduleSymbol) return [];

  const moduleExports = checker.getExportsOfModule(moduleSymbol);
  const componentDocs: ComponentDoc[] = [];

  for (const module of moduleExports) {
    // if there are no export declarations, then there is nothing to document
    if (module.declarations == null || module.declarations.length === 0) continue;

    // check if the expression is a component expression, which means to simply check
    // if it is a function export.
    const componentDeclaration = module.valueDeclaration;
    if (!componentDeclaration) continue;

    const componentType = checker.getTypeOfSymbolAtLocation(module, componentDeclaration);
    // see if it has a call signature, as all component should have.
    const propsType = extractPropsFromType(componentType);
    if (propsType == null) continue;

    const { description, tags } = getFullJsDocComment(module, checker);
    const displayName = tags['name'] ?? module.getName();
    const filePath = sourceFile.fileName;
    const props = getPropsInfo(propsType, checker);

    componentDocs.push({
      description,
      displayName,
      filePath,
      props,
      tags,
    });
  }
  return componentDocs;
}

/**
 * Extracts the type of the props from the component type
 * @param type The component type
 * @returns The Props type
 */
function extractPropsFromType(type: ts.Type) {
  const callSignatures = type.getCallSignatures();
  if (callSignatures.length) {
    // Could be a stateless component.  Is a function, so the props object we're interested
    // in is the (only) parameter.

    for (const sig of callSignatures) {
      const params = sig.getParameters();
      if (params.length === 0) {
        continue;
      }
      return params[0];
    }
  }
  return null;
}

/**
 * Creates a JS info about the props type.
 * @param propsSymbol The Props symbol
 * @param checker The checker instance to be used for parsing
 * @returns The info about the props type
 */
function getPropsInfo(propsSymbol: ts.Symbol, checker: ts.TypeChecker) {
  if (!propsSymbol.valueDeclaration) {
    return {} as Props;
  }

  const propsType = checker.getTypeOfSymbolAtLocation(propsSymbol, propsSymbol.valueDeclaration);
  const baseProps = propsType.getApparentProperties();
  let propertiesOfProps = baseProps;

  if (propsType.isUnionOrIntersection()) {
    propertiesOfProps = [
      // Resolve extra properties in the union/intersection
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(propertiesOfProps = (checker as any).getAllPossiblePropertiesOfTypes(propsType.types)),
      // But props we already have override those as they are already correct.
      ...baseProps,
    ];

    if (!propertiesOfProps.length) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const subTypes = (checker as any).getAllPossiblePropertiesOfTypes(
        propsType.types.reduce<ts.Symbol[]>(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (all, t) => [...all, ...((t as any).types || [])],
          [],
        ),
      );

      propertiesOfProps = [...subTypes, ...baseProps];
    }
  }

  const result: Props = {};
  propertiesOfProps.forEach((prop) => {
    const propName = prop.getName();

    // Find type of prop by looking in context of the props object itself.
    const propType = checker.getTypeOfSymbolAtLocation(prop, propsSymbol.valueDeclaration!);
    const jsDocComment = getFullJsDocComment(prop, checker);

    const defaultValue = { value: jsDocComment.tags['default'] ?? 'undefined' };
    const baseProp = baseProps.find((p) => p.getName() === propName);
    const required = !isOptional(prop) && (!baseProp || !isOptional(baseProp));
    const type = { name: getTypeString(propType, checker) };
    const propTags = jsDocComment.tags;
    const description = jsDocComment.description.replace(/\r\n/g, '\n');

    result[propName] = {
      defaultValue,
      description,
      name: propName,
      required,
      tags: propTags,
      type,
    };
  });

  return result;
}
