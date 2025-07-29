import './styles/App.module.css';
import React, { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './appRoutes';

export default function App() {
  const routing = useRoutes(routes);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando…</div>}>{routing}</Suspense>
    </BrowserRouter>
  );
}
