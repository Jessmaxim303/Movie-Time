import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';
import rating from '../../Assets/rating.svg';
import PropTypes from 'prop-types';

export class MovieCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false
    }
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover(e) {
    e.preventDefault();
    this.setState(prevState => ({isHovered: !prevState.isHovered}));
}
   
   render() {
    let moviebox;
    const backgroundStyling = {
      background: `linear-gradient(to top, rgba(0, 0, 0), rgba(0, 0, 0, 0)), url(${this.props.backdropPath}) no-repeat center top`,
      backgroundSize: 'cover',
    }
    if (!this.state.isHovered) {
      moviebox = <Link className='movie-card' id={this.props.id} to={`/movies/${this.props.id}`} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                   <img className='poster-img' alt={`movie poster for ${this.props.title}`} src={this.props.posterPath} />
                 </Link>
    } else {
      moviebox = <Link className='movie-card-detail' style={backgroundStyling} id={this.props.id} to={`/movies/${this.props.id}`} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                   <section className='movie-card-text'>
                     <h2 className='movie-rating'>{this.props.title}</h2>
                     <div className='movie-rating-box'>
                       <img src={rating}/>
                       <h2 className='movie-rating-number'>{`${this.props.averageRating}/10`}</h2>
                     </div>
                     <p className='movie-overview'>{this.props.overview}</p>
                   </section>
                 </Link>
    }

    return (
      <section className="moviecard-box">
        {moviebox}
      </section>
      )
    }
        
}

// <h2 className='movie-rating user-rating'>{`Your Rating: ${this.props.userRating.rating}/10`}</h2>