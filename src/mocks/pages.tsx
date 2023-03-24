import DetailPage from '../pages/DetailPage';
import FilterPage from '../pages/FilterPage';
import JoinPage from '../pages/SignUpPage';
import ListPage from '../pages/ListPage';
import MyPage from '../pages/MyPage';
import SignInPage from '../pages/SignInPage';

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
    element: <JoinPage />,
    withAuth: false,
  },
  {
    path: '/',
    label: 'list',
    element: <ListPage />,
    withAuth: true,
  },
  {
    path: '/:title',
    label: 'detail',
    element: <DetailPage />,
    withAuth: true,
  },
  {
    path: '/filter/:category',
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
