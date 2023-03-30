import SignInPage from '@pages/SignInPage';
import SignUpPage from '@pages/SignUpPage';
import ListPage from '@pages/ListPage';
import DetailPage from '@pages/DetailPage';
import FilterPage from '@pages/FilterPage';
import MyPage from '@pages/MyPage';

export const pages = [
  {
    path: '/sign-in',
    label: 'sign-in',
    element: <SignInPage />,
    withAuth: false,
  },
  {
    path: '/sign-up',
    label: 'sign-up',
    element: <SignUpPage />,
    withAuth: false,
  },
  {
    path: '/',
    label: 'list',
    element: <ListPage />,
    withAuth: true,
  },
  {
    path: '/list/:title',
    label: 'detail',
    element: <DetailPage />,
    withAuth: true,
  },
  {
    path: '/:category',
    label: 'filter',
    element: <FilterPage />,
    withAuth: true,
  },
  {
    path: '/user',
    label: 'my-page',
    element: <MyPage />,
    withAuth: true,
  },
];
