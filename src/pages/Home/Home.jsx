// src/pages/Home/Home.jsx
import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Home.module.css';

// Datos de ejemplo; más adelante conectaremos con movieService
const nowShowing = [
  { id: 1, title: 'Título Película 1', image: '/assets/film1.jpg' },
  { id: 2, title: 'Título Película 2', image: '/assets/film2.jpg' },
  { id: 3, title: 'Título Película 3', image: '/assets/film3.jpg' },
];

const upcoming = [
  { id: 101, title: 'Próximo Estreno 1', image: '/assets/up1.jpg' },
  { id: 102, title: 'Próximo Estreno 2', image: '/assets/up2.jpg' },
  { id: 103, title: 'Próximo Estreno 3', image: '/assets/up3.jpg' },
];

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Sección principal (Hero) */}
      <HeroSection />

      {/* En Cartelera */}
      <section className={`${styles.section} container py-5`}>
        <h2 className={`${styles.heading} text-danger`}>En Cartelera</h2>
        <div className="row">
          {nowShowing.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-4">
              <MovieCard title={movie.title} image={movie.image} />
            </div>
          ))}
        </div>
      </section>

      {/* Próximos Estrenos */}
      <section className={`${styles.section} ${styles.sectionLight} container`}>
        <h2 className={`${styles.heading} text-primary`}>Próximos Estrenos</h2>
        <div className="row">
          {upcoming.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-4">
              <MovieCard title={movie.title} image={movie.image} />
            </div>
          ))}
        </div>
      </section>

      {/* Aquí podríamos añadir promociones, contacto, etc. */}
    </div>
  );
}
