// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container text-center py-4">
        <p className="mb-1">© 2025 CineMax. Todos los derechos reservados.</p>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="/" className={styles.link}>
                Inicio
              </a>
            </li>
            <li>
              <a href="/next" className={styles.link}>
                Próximos Estrenos
              </a>
            </li>
            <li>
              <a href="/promo" className={styles.link}>
                Promociones
              </a>
            </li>
            <li>
              <a href="/contact" className={styles.link}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
