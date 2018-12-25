import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Container.css';
import Movies from '../MovieList';
import MovieFinder from '../Search/Search.js';

class AppContainer extends Component {
  
  state = {
    showMovies: true,
    movies: [],
    showError: true
  }
//add movie to watchlist
  _addMovie = (movie) => 
  {let index = this.state.movies.findIndex(el => el.id == movie.id);
    if(index == -1)
    this.setState((prevState) => {
      const movies = [movie, ...prevState.movies];
      return { movies }
      
    });
    {
      this.setState((prevState) => {
      return { showError: !prevState.showError }
    })
    }
  }
//delete movie from watchlist
  _deleteMovie(id) {
    console.log(id);
      const movies = this.state.movies.filter(movie => 
      {return movie.id !== id ;}
    );
    this.setState({movies})
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

