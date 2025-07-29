import React from 'react';
import styles from './HeroSection.module.css';
import heroBg from '../../assets/hero-bg.jpg';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Bienvenido a CineMax</h1>
        <p className={styles.subtitle}>
          Descubre las películas más taquilleras y vive la experiencia única del cine
        </p>
        <a className={`btn btn-danger btn-lg ${styles.button}`}>Ver en Cartelera</a>
        className={styles.hero}
        style={{ backgroundImage: `url(${heroBg})` }}
      </div>
    </section>
  );
}
