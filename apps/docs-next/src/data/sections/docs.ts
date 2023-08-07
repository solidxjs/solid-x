import { Section } from '~/root.types';

const TYPE = {
  CATEGORY: 'category',
  HEADER: 'header',
  PAGE: 'page',
} as const;

const meta = [
  {
    title: 'Introduction',
    href: '/docs/introduction',
    type: TYPE.PAGE,
  },
  {
    title: 'Getting started',
    type: TYPE.HEADER,
  },
  {
    title: 'Installation',
    href: '/docs/installation',
    type: TYPE.PAGE,
  },
  {
    title: 'Usage',
    href: '/docs/usage',
    type: TYPE.PAGE,
  },
  {
    title: 'Components',
    type: TYPE.HEADER,
  },
  {
    title: 'Actions',
    links: [
      {
        title: 'Button',
        href: '/docs/actions/button',
        type: TYPE.PAGE,
      },
    ],
    type: TYPE.CATEGORY,
  },
  {
    title: 'Communication',
    links: [
      {
        title: 'Badge',
        href: '/docs/communication/badge',
        type: TYPE.PAGE,
      },
    ],
    type: TYPE.CATEGORY,
  },
  {
    title: 'Customization',
    type: TYPE.HEADER,
  },
  {
    title: 'Tools',
    type: TYPE.HEADER,
  },
  {
    title: 'About Solid X',
    href: '/about',
    type: TYPE.PAGE,
  },
  {
    title: 'Solid JS Docs',
    href: 'https://solidjs.com?utm_source=solidx.dev&utm_medium=referral&utm_campaign=sidebar',
    type: TYPE.PAGE,
  },
] as Section[];

export default meta;
