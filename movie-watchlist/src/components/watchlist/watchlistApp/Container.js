import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Container.css';
import Movies from '../MovieList';
import MovieFinder from '../Search/Search.js';

class AppContainer extends Component {
  
  state = {
    showMovies: true,
    movies: [],
  }
//add movie to watchlist
  _addMovie = (movie) => {
    this.setState((prevState) => {
      const movies = [movie, ...prevState.movies];
      return { movies };
    });
  }
//delete movie from watchlist
  _deleteMovie(id) {
    console.log(id);
    this.setState(prevState => {
      const movies = prevState.movies.filter(movie => movie.id !== id);
      return { movies };
    });
  }

  render() {
   let  movies = null;
    if (this.state.showMovies) {
      movies = <Movies movies={this.state.movies}
        onDeleteButtonClick={this._deleteMovie.bind(this)}
         />;
    }
    
    return (
      <div className=" row2">
        <MovieFinder addMovie={this._addMovie} />
        <div className="row justify-content-center movie">
        {movies}
        </div>
        </div>
		
    );
  }
}

export default AppContainer;

