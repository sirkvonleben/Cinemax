import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieModal.module.css';

export default function MovieModal({ movie, onClose, showBuyButton }) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          ×
        </button>
        <h2>{movie.title}</h2>
        <p>{movie.synopsis}</p>
        <iframe
          src={movie.trailerUrl}
          title={movie.title}
          width="100%"
          height="315"
          allowFullScreen
        />
        {showBuyButton && <button className="btn btn-danger mt-3">Comprar entrada</button>}
      </div>
    </div>
  );
}

MovieModal.propTypes = {
  movie: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  showBuyButton: PropTypes.bool.isRequired,
};
