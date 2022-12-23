import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Cola } from '../pages/Cola';
import { CrearTicket } from '../pages/CrearTicket';
import { Escritorio } from '../pages/Escritorio';
import { Ingresar } from '../pages/Ingresar';
import { TicketApp } from '../TicketApp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TicketApp />,
    children: [
      { path: 'ingresar', element: <Ingresar /> },
      { path: 'cola', element: <Cola /> },
      { path: 'crear', element: <CrearTicket /> },
      { path: '*', element: <Navigate to="/ingresar" /> },
      {
        path: '/escritorio',
        element: <Escritorio />,
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/" />,
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);
