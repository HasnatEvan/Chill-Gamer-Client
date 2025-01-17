import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRouter from './MainRouter/MainRouter';
import Error from './Error/Error';
import Home from './Component/Home';
import Review from './Component/Review';
import AddReview from './Component/AddReview';
import MyReviews from './Component/MyReviews';
import GameWatch from './Component/GameWatch';
import Login from './Page/Login';

import ReviewDetails from './Component/ReviewDetails';
import SignUp from './Page/SIgnUp';
import AuthProvider from './AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import Updated from './Component/Updated';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRouter />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/reviews',
        element: <Review />,
        loader: () => fetch('https://chill-gamer-server-black.vercel.app/game'),
      },
      {
        path: '/reviewDetails/:id',
        element: <PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://chill-gamer-server-black.vercel.app/game/${params.id}`),
      },
      {
        path: '/addReview',
        element: <PrivateRoute><AddReview /></PrivateRoute>,
      },
      {
        path: '/myReviews',
        element: <PrivateRoute><MyReviews /></PrivateRoute>,
        loader: () => fetch('https://chill-gamer-server-black.vercel.app/game')
      },
      {
        path: '/gameWatch',
        element: <PrivateRoute> <GameWatch /></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signIn',
        element: <SignUp></SignUp>,
      },
      {
        path: '/updateReview/:id',
        element: <Updated></Updated>,
        loader: ({ params }) =>
          fetch(`https://chill-gamer-server-black.vercel.app/game/${params.id}`),
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>
);
