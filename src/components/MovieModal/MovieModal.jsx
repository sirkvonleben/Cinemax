import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieModal.module.css';

export default function MovieModal({ movie, onClose, showBuyButton }) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <h2>{movie.title}</h2>
        <p>
          <strong>Género:</strong> {movie.genre}
        </p>
        <p>
          <strong>Estreno:</strong> {movie.releaseDate}
        </p>
        <p>{movie.synopsis}</p>
        <div className={styles.trailer}>
          <iframe
            width="100%"
            height="315"
            src={movie.trailerUrl}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {showBuyButton && <button className="btn btn-danger mt-3">Comprar entrada</button>}
      </div>
    </div>
  );
}

MovieModal.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    releaseDate: PropTypes.string,
    synopsis: PropTypes.string,
    trailerUrl: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  showBuyButton: PropTypes.bool.isRequired,
};
