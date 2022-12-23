import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router';
import './index.css';

import { UiProvider } from './context/UiContext';
import { SocketProvider } from './context/SocketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SocketProvider>
      <UiProvider>
        <RouterProvider router={router} />
      </UiProvider>
    </SocketProvider>
  </React.StrictMode>
);
