// src/pages/Home/Home.jsx
import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieModal from '../../components/MovieModal/MovieModal';
import styles from './Home.module.css';
import { movies } from '../../data/movies';

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const today = new Date();
  const nowShowing = movies.filter((m) => new Date(m.releaseDate) <= today);
  const upcoming = movies.filter((m) => new Date(m.releaseDate) > today);

  return (
    <div className={styles.home}>
      <HeroSection />

      <section id="en-cartelera" className={`${styles.section} container py-5`}>
        <h2 className={`${styles.heading} text-danger`}>En Cartelera</h2>
        <div className="row">
          {nowShowing.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-4">
              <MovieCard
                title={movie.title}
                image={movie.image}
                onClick={() => setSelectedMovie(movie)}
              />
            </div>
          ))}
        </div>
      </section>

      <section
        id="proximos-estrenos"
        className={`${styles.section} ${styles.sectionLight} container py-5`}
      >
        <h2 className={`${styles.heading} text-primary`}>Próximos Estrenos</h2>
        <div className="row">
          {upcoming.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-4">
              <MovieCard
                title={movie.title}
                image={movie.image}
                onClick={() => setSelectedMovie(movie)}
              />
            </div>
          ))}
        </div>
      </section>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          showBuyButton={selectedMovie.isShowing}
        />
      )}
    </div>
  );
}
