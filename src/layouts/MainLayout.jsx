console.log('MainLayout renderizado');
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Cargando…</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}
