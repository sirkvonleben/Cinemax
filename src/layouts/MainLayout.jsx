import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css'; // si necesitas estilos

export default function MainLayout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <Suspense fallback={<div>Cargando…</div>}>
          {}
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
