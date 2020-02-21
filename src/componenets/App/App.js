import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import MovieContainer from '../../containers/MovieContainer/MovieContainer.js'
import MovieDetail from '../MovieDetail/MovieDetail.js';
import Header from '../Header/Header.js';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <MovieContainer />
      </div>
    )
  }
}

export default App;
