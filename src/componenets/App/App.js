import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import MovieContainer from '../../containers/MovieContainer/MovieContainer.js';
import Login from '../Login/Login';
import MovieDetail from '../MovieDetail/MovieDetail.js';
import Header from '../Header/Header.js';
import { fetchMoviesAPI } from '../../apiCalls/apiCalls.js';
import { loadingMovies, getMovies } from '../../actions';
import { Loading } from '../Loading/Loading.js';
import PropTypes from 'prop-types';
import Background from '../../Assets/login-backdrop.jpg';

export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    Promise.all([this.loadMovies()])
  }

  loadMovies() {
    fetchMoviesAPI()
    .then(data => {
      this.props.getMovies(data.movies)
      this.props.loadingMovies(true)
    })
  }

  render() {
    const backgroundStyling = {
      background: `linear-gradient(to top, rgba(0, 0, 0, .7), rgba(42, 42, 42, 0)), url(${Background}) no-repeat center top`,
      backgroundSize: 'cover',
    }
    if (this.props.loadingStatus) {
      return (
      <main className='main'>
        <Header />
        <Loading />
      </main>
      )
    }
    return (
      <main className='main' >
        
        <div className='content' style={backgroundStyling}>
          <Switch>
            <Route
              path='/movie'
              render={() => <MovieContainer />}
            />
            <Route
              path='/movies/:id'
              render={({ match })=>< MovieDetail selectedMovie=
                  {this.props.movies.find(movie => movie.id === parseInt(match.params.id))}/>}/>
            <Route
              path='/'
              render={()=><Login />} />
          </Switch>
        </div>
      </main>
    )
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  ratings: state.ratings,
  loadingStatus: state.loadingStatus,
  user: state.user
})

export const mapDispatchToProps = dispatch => ({
  loadingMovies: (loadingStatus) => dispatch(loadingMovies(loadingStatus)),
  getMovies: (movies) => dispatch(getMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  movies: PropTypes.array,
  ratings: PropTypes.array,
  loadingStatus: PropTypes.number,
  user: PropTypes.string
}
