import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './Routes/Root';
import Booking from './Routes/Booking';
import Details from './Routes/Details';
import Appointments from './Routes/Appointments';
import { OauthContextProvider } from './store/oauth-context';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/appointment-creation",
    element: <Root />,
    children: [
      {
        path: "/appointment-creation",
        element: <Appointments />
      },
      {
        path: "/appointment-creation/appointments/:id",
        element: <Details />
      }
    ]
  },
  {
    path: "/appointment-creation/booking",
    element: <Booking />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <OauthContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </OauthContextProvider>
)