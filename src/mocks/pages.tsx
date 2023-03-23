import DetailPage from '../pages/DetailPage';
import FilterPage from '../pages/FilterPage';
import JoinPage from '../pages/SignUpPage';
import ListPage from '../pages/ListPage';
import MyPage from '../pages/MyPage';
import SignInPage from '../pages/SignInPage';

export const pages = [
  {
    path: '/',
    label: 'home',
    element: <SignInPage />,
    withAuth: false,
  },
  {
    path: '/join',
    label: 'join',
    element: <JoinPage />,
    withAuth: false,
  },
  {
    path: '/list',
    label: 'list',
    element: <ListPage />,
    withAuth: true,
  },
  {
    path: '/filter/:category',
    label: 'filter',
    element: <FilterPage />,
    withAuth: true,
  },
  {
    path: '/detail/:title',
    label: 'detail',
    element: <DetailPage />,
    withAuth: true,
  },
  {
    path: '/user',
    label: 'my-page',
    element: <MyPage />,
    withAuth: true,
  },
];
