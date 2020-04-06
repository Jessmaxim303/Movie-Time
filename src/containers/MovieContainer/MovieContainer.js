import React, { Component } from 'react';
import { MovieCard } from '../../componenets/MovieCard/MovieCard.js';
import Header from '../../componenets/Header/Header.js';
import { connect } from 'react-redux';
import './MovieContainer.scss';
import PropTypes from 'prop-types';

export class MovieContainer extends Component {
  constructor() {
    super()
    this.state = {
      isHovered: false
    }
  }

  render() {
    let movieCards = this.props.movies.map(movie => {
      return <MovieCard
        key={movie.id}
        title={movie.title}
        posterPath={movie.poster_path}
        backdropPath={movie.backdrop_path}
        id={movie.id}
        averageRating={movie.average_rating}
        userRating={this.props.ratings.find(rating => movie.id === rating.movie_id)}
        overview={movie.overview}
      />
    })
    return (
      <section className="moviecard-container">
        <Header />
          {movieCards}
      </section>
    )
  }
}

export const mapStateToProps = state => {
  return {
    movies: state.movies,
    ratings: state.ratings,
    loadingStatus: state.loadingStatus
  }
}

export default connect(mapStateToProps)(MovieContainer);

MovieContainer.propTypes = {
  movies: PropTypes.array,
  ratings: PropTypes.array,
  loadingStatus: PropTypes.bool
};
