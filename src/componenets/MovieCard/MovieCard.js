import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss'
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
    if (!this.state.isHovered) {
      moviebox = <Link className='movie-card' id={this.props.id} to={`/movies/${this.props.id}`} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          <img className='poster-img' alt={`movie poster for ${this.props.title}`} src={this.props.posterPath} />
        </Link>
    } else {
      moviebox = <Link className='movie-card-detail' id={this.props.id} to={`/movies/${this.props.id}`} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          <img className='poster-img' alt={`movie poster for ${this.props.title}`} src={this.props.posterPath} />
          <h1 className='movie-card-title'>{this.props.title}</h1>
          <footer className='ratings-footer'>
          </footer>
        </Link>
    }

    return (
      <section className="moviecard-box">
        {moviebox}
      </section>
      )
    }
        
}
            // <h2 className='movie-rating'>{`Avg. Rating: ${this.props.averageRating.toFixed(2)}/10`}</h2>
            // <h2 className='movie-rating user-rating'>{`Your Rating: ${this.props.userRating.rating}/10`}</h2>