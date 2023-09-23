import ts from 'typescript';

export const isOptional = (prop: ts.Symbol) => (prop.getFlags() & ts.SymbolFlags.Optional) !== 0;
export const getFullJsDocComment = (symbol: ts.Symbol, checker: ts.TypeChecker) => {
  // in some cases this can be undefined (Pick<Type, 'prop1'|'prop2'>)
  if (symbol.getDocumentationComment === undefined) {
    return {
      description: '',
      tags: {},
    };
  }

  let mainComment = ts.displayPartsToString(symbol.getDocumentationComment(checker));
  if (mainComment) {
    mainComment = mainComment.replace(/\r\n/g, '\n');
  }

  const tags = symbol.getJsDocTags() || [];
  const tagMap: Record<string, string> = {};

  tags.forEach((tag) => {
    const trimmedText = ts.displayPartsToString(tag.text).trim();
    const currentValue = tagMap[tag.name];
    tagMap[tag.name] = currentValue ? currentValue + '\n' + trimmedText : trimmedText;
  });

  return {
    description: mainComment,
    tags: tagMap,
  };
};
export const getTypeString = (type: ts.Type, checker: ts.TypeChecker) => {
  // use the constraint if it is a generic with constraint
  const processedType = type.getConstraint() ?? type;
  // We will be removing `| undefined` from type as we will be using required flag
  return checker.typeToString(processedType).replace(' | undefined', '');
};
