import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Donation from '../pages/Donation';
import Home from '../pages/Home';
import Newsletter from '../pages/Newsletter';
import Recipes from '../pages/Recipes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'recipes',
        element: <Recipes />,
      },
      {
        path: 'donation',
        element: <Donation />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
    ],
  },
]);

export default router;
