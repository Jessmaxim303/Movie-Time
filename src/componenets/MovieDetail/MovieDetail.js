import React, { Component } from 'react';
import './MovieDetail.scss';
import { connect } from 'react-redux';
import { postRating, deleteRating } from '../../actions';
import { postRatingToApi } from '../../apiCalls/apiCalls';

export class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      currentRating: 1
    }
  }

  handleRatingChange = e => {
    this.setState({[e.target.name]: parseInt(e.target.value)})
  }

  submitRating() {
    console.log(postRatingToApi)
    let movieId = this.props.selectedMovie.id
    let rating = this.state.currentRating
    let userId = this.props.user.id
    // console.log(movieId, rating, userId)
    postRatingToApi(movieId, rating, userId)
    // console.log(this.props.user)
    // const currentRating = []
  }

  render() {
    let {title, id, average_rating, poster_path, backdrop_path, release_date, overview} = this.props.selectedMovie
    const backgroundStyling = {
      background: `linear-gradient(to top, rgba(42, 42, 42, .75), rgba(42, 42, 42, 0)), url(${backdrop_path}) no-repeat center top`,
      backgroundSize: 'cover',

    }
    return (
      <section className='movie-detail' style={backgroundStyling}>
        <div className='movie-detail__info' >
          <img className='movie-detail__poster' alt={`movie poster for ${title}`} src={poster_path} />
          <div className='movie-detail__details'>
            <h2 className='movie-detail__title'>{title}</h2>
            <p className='movie-detail__average-rating'>{`Average Rating: ${average_rating.toFixed(2)}`}</p>
          {this.props.user ? <><label for='currentRating'>User Rating: 6</label> 
          <input onChange={this.handleRatingChange} value={this.state.currentRating} type='range' min='1' max='10' id='user-rating' name='currentRating' /></>
          : null}
            <button className='movie-detail__button' onClick={() => this.submitRating() }>Add Rating</button>
            <p className='movie-detail__overview'>{overview}</p>
          </div>
        </div>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  ratings: state.ratings,
  user: state.user
})

export const mapDispatchToProps = dispatch => ({
  postRating: (rating) => dispatch(postRating(rating)),
  deleteRating: (rating) => dispatch(deleteRating(rating))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
