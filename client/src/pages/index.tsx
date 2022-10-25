import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>3</div>,
  },
]);

const Pages = () => <RouterProvider router={router} />;

export { Pages };
