import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';  // Correct import for QueryClientProvider
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { MainLayout } from './Components/UI/MainLayout'; // Ensure this is correctly imported
import { Home } from './Pages/Home';
import { FetchOld } from './Pages/FetchOld';
import { FetchRQ } from './Pages/FetchRQ';
import "./App.css"
import { FetchIndv } from './Components/UI/FetchIndv';
import { InfiniteScroll } from './Pages/InfiniteScroll';

// Create a route
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [ 
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
      {
        path: "/rq/:id",
        element: <FetchIndv />,
      },
      {
        path: "/infinite",
        element: <InfiniteScroll/>,
      },
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient(); // Correctly instantiate QueryClient

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
