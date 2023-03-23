import { createBrowserRouter } from 'react-router-dom';
import { pages } from '../mocks/pages';
import Auth from '../components/common/Auth';
import Layout from '../components/common/Layout';

const Router = createBrowserRouter(
  pages.map((page) => {
    return page.withAuth
      ? {
          path: page.path,
          element: (
            <Layout>
              <Auth>{page.element}</Auth>
            </Layout>
          ),
        }
      : {
          path: page.path,
          element: <Layout>{page.element}</Layout>,
        };
  })
);

export default Router;
