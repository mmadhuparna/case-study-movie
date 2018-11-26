import React from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../Class'
import css from './Movie.css';

const Movie = (props) => {
  if (typeof props.title === 'undefined') {
    throw new Error('Cannot render Movie without a title');
  }
  return (
    
    <React.Fragment>
     
      <div className="imgcontainer">
      <img src={props.poster} alt={props.title}/>
      <button className="click" onClick={props.onDeleteButtonClick}>x</button>
      <p className="para">{props.title}</p>
      </div>
      
    </React.Fragment>
     
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
}
export default withClass(Movie, css.Movie);