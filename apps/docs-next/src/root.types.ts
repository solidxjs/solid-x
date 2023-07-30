export type PageMeta = {
  title: string;
  href: string;
  links?: never;
  type: 'page';
};
export type CategoryMeta = {
  title: string;
  href?: never;
  links: (CategoryMeta | PageMeta)[];
  type: 'category';
};
export type HeaderMeta = {
  title: string;
  href?: never;
  links?: never;
  type: 'header';
};
export type HeadingsMeta = {
  depth: number;
  slug: string;
  text: string;
};
export type SectionsMeta = (CategoryMeta | HeaderMeta | PageMeta);
export type MetaFile = {
  default: SectionsMeta[]
};
export type MDXFile = {
  getHeadings: () => HeadingsMeta[];
};
