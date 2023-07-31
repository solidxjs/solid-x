import { Outlet } from '@solidjs/router';
import { Layout } from '~/components/Layout';

export default function DocsLayout() {
  return (
    <Layout hideSidebar hideTOC>
      <Outlet />
    </Layout>
  );
}
