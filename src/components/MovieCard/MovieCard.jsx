import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';
import PropTypes from 'prop-types';

export default function MovieCard({ id, title, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.body}>
        <h5 className={styles.title}>{title}</h5>
        <Link to={`/movie/${id}`} className={`btn btn-primary ${styles.button}`}>
          Ver detalles
        </Link>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
