import React, { Component } from 'react';
import { MovieCard } from '../../componenets/MovieCard/MovieCard.js'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './MovieContainer.scss'


export class MovieContainer extends Component {

  render() {
    let movieCards = this.props.movies.map(movie => {
      return <MovieCard
                title={movie.title}
                posterPath={movie.poster_path}
                id={movie.id}
                averageRating={movie.average_rating}
             />
    })

    return (
      <section className='movie-container'>
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
