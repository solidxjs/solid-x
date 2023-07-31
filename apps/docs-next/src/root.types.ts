export type Page = {
  title: string;
  href: string;
  links?: never;
  type: 'page';
};
export type Category = {
  title: string;
  href?: never;
  links: (Category | Page)[];
  type: 'category';
};
export type Header = {
  title: string;
  href?: never;
  links?: never;
  type: 'header';
};
export type Section = (Category | Header | Page);
