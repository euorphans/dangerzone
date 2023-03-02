import { createBrowserRouter } from 'react-router-dom';
import { RouterPaths } from '@shared/lib/helpers/paths';
import { Home } from '@pages/home';

export const Routing = createBrowserRouter([
  {
    element: <Home />,
    path: RouterPaths.HOME_PAGE,
  },
]);
