import { Outlet } from '@solidjs/router';
import { Layout } from '~/components/Layout';
import { VERSIONS } from '~/data/versions/material';
import { Section } from '~/root.types';

const sections: Section[] = [
  {
    title: 'Changelog',
    type: 'header',
  },
  ...VERSIONS.map<Section>((v) => ({
    title: `v${v}`,
    href: `/changelog/${v}`,
    type: 'page',
  })),
];

export default function ChangelogLayout() {
  return (
    <Layout sections={sections}>
      <Outlet />
    </Layout>
  );
}
