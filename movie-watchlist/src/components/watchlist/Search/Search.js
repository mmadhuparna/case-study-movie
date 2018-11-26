import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import css from './Search.css'
import withClass from '../../../Class'

class MovieFinder extends React.Component {
  static propTypes = {
    addMovie: PropTypes.func.isRequired
  }
  constructor(){
    super();
 this. state = {
    
    results: [],
    shown: true,
    
  };
  }
  //event while click the search button
  _searchMovie = (event) => {
    event.preventDefault();
    const query = this._query.value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=66a36cfd82ace2dd1264616cbd7fc59b&language=fr&query=${query}`;
    axios.get(url)
      .then(response => {
        this.setState({ results: response.data.results });
        this.setState({shown : false})
      });  
  }
  //movie added to watchlis
  _resultClickHandler = (result) => {
    const movie = {
      id: result.id,
      title: result.title,
      releaseDate: result.release_date,
      poster: `https://image.tmdb.org/t/p/w185/${result.poster_path}`
    }
    console.log(movie);
    this.props.addMovie(movie);
    this.setState({ results: [] })
    this.setState({shown : true})
    
  }
  //delete UL
  deleteUl = () =>{
    this.setState({results:[]})
    this.setState({shown : true})
}
  render() {
     const results = this.state.results.map(result => {
      return (
        <li
          key={result.id}
          onClick={() => this._resultClickHandler(result)}
          style={{ cursor: 'pointer' }}>
            {result.title} 
        </li>
      );
      
    })
  
    var hidden = {
			display: this.state.shown ? "none " : "block"
    }
    
    return (
      <div className="col-md-12 ">
        <form className="style"  onSubmit={this._searchMovie} >
          <div className="formGroup">
          <input type="search" placeholder="Add a Movie" ref={(i) => this._query = i} />
          <button className="btn btn-primary float-right ">Search</button>
          </div> 
        </form>
        <a  href="/">Logout</a>
        <ul style = {hidden}>
        <button className="btn-danger" onClick={this.deleteUl}>X</button>
          {results.length ? results : 'Movie Not Found. Try Something else'}
        </ul>
      </div>
    );
  }
  
  }
  export default MovieFinder;