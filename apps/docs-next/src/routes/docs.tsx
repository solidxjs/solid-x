import { Outlet } from '@solidjs/router';
import { Layout } from '~/components';

export default function DocsLayout() {
  return (
    <Layout page="docs">
      <Outlet />
    </Layout>
  );
}
