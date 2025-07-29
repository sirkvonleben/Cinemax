import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieModal from '../../components/MovieModal/MovieModal';
import styles from './Home.module.css';
import { movies } from '../../data/movies';

export default function Home() {
  const [sel, setSel] = useState(null);
  const today = new Date();
  const nowShowing = movies.filter((m) => new Date(m.releaseDate) <= today);
  const upcoming = movies.filter((m) => new Date(m.releaseDate) > today);

  return (
    <div className={styles.home}>
      <HeroSection />
      <section
        id="en-cartelera"
        className={`${styles.section} ${styles.sectionDark || ''} container`}
      >
        <h2 className={styles.sectionHeading}>En Cartelera</h2>
        <div className="row">
          {nowShowing.map((m) => (
            <div key={m.id} className="col-md-4 mb-4">
              <MovieCard title={m.title} image={m.image} onClick={() => setSel(m)} />
            </div>
          ))}
        </div>
      </section>

      <section
        id="proximos-estrenos"
        className={`${styles.section} ${styles.sectionLight} container`}
      >
        <h2>Próximos Estrenos</h2>
        <div className="row">
          {upcoming.map((m) => (
            <div key={m.id} className="col-md-4 mb-4">
              <MovieCard title={m.title} image={m.image} onClick={() => setSel(m)} />
            </div>
          ))}
        </div>
      </section>
      {sel && <MovieModal movie={sel} onClose={() => setSel(null)} showBuyButton={sel.isShowing} />}
    </div>
  );
}
