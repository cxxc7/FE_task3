//src/components/MovieCard.jsx

import React from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // Adjust as necessary

const MovieCard = ({ movie, vote_average }) => (
  <div className="movie-card">
    {movie.poster_path ? (
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
    ) : (
      <div className="no-image">No Image Available</div>
    )}
    <h2>{movie.title}</h2>
    <p>Vote Average: {vote_average}</p>
  </div>
);

export default MovieCard;
