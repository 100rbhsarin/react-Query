import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';  // Correct import for QueryClientProvider
import { MainLayout } from './Components/UI/MainLayout'; // Ensure this is correctly imported
import { Home } from './Pages/Home';
import { FetchHold } from './Pages/FetchHold';
import { FetchRQ } from './Pages/FetchRQ';
import "./App.css"

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
        element: <FetchHold />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
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
      </QueryClientProvider>
    </>
  );
};

export default App;
