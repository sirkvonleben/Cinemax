// src/services/movieService.js
const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchMovies() {
  const resp = await fetch(`${BASE_URL}/movies`);
  // ...
}