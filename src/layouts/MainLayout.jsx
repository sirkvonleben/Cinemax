// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './MainLayout.module.css'; // si necesitas estilos

export default function MainLayout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
<Suspense fallback={<div>Cargando...</div>}>
        <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}