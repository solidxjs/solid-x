import { Outlet } from '@solidjs/router';
import { Layout } from '~/components/Layout';
import { Section } from '~/root.types';

const sections: Section[] = [
  {
    title: 'Introduction',
    href: '/docs/introduction',
    type: 'page',
  },
  {
    title: 'Getting started',
    type: 'header',
  },
  {
    title: 'Installation',
    href: '/docs/installation',
    type: 'page',
  },
  {
    title: 'Usage',
    href: '/docs/usage',
    type: 'page',
  },
  {
    title: 'Components',
    type: 'header',
  },
  {
    title: 'Actions',
    links: [
      {
        title: 'Button',
        href: '/docs/actions/button',
        type: 'page',
      },
    ],
    type: 'category',
  },
  {
    title: 'Communication',
    links: [
      {
        title: 'Badge',
        href: '/docs/communication/badge',
        type: 'page',
      },
    ],
    type: 'category',
  },
  {
    title: 'Customization',
    type: 'header',
  },
  {
    title: 'Tools',
    type: 'header',
  },
  {
    title: 'Solid JS Docs',
    href: 'https://solidjs.com?utm_source=solidx.dev&utm_medium=referral&utm_campaign=sidebar',
    type: 'page',
  },
];

export default function DocsLayout() {
  return (
    <Layout sections={sections}>
      <Outlet />
    </Layout>
  );
}
