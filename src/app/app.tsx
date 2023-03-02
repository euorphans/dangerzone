import '@shared/static/styles/main.scss';
import { RouterProvider } from 'react-router-dom';
import { Routing } from '@pages/index';
import { ErrorBoundary } from 'react-error-boundary';

export const App = () => {
  return (
    // <ErrorBoundary
    //  onError={(error: any, info: any) => console.log(error, info)}
    //  FallbackComponent={}
    // >
    <RouterProvider router={Routing} />
    // </ErrorBoundary>
  );
};
