import React from 'react';
import css from './Movie/Movie.css'
import Movie from './Movie/Movie';
import ErrorBoundary from './ErrorBoundary';

export default (props) => props.movies.map((movie) => {
  return (
    
    <ErrorBoundary key={movie.id}>

      <Movie 
        onDeleteButtonClick={() => props.onDeleteButtonClick(movie.id)}
        title={movie.title}
        poster={movie.poster}
      />
      
    </ErrorBoundary>
    
  );
});