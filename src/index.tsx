import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageRoutes } from './utils/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <PageRoutes />
  </React.StrictMode>,
);
