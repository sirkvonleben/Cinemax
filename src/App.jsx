import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './appRoutes';

export default function App() {
  const routing = useRoutes(routes);
  return <Suspense fallback={<div>Cargando…</div>}>{routing}</Suspense>;
}
