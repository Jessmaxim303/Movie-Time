import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown.js';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';
import PropTypes from 'prop-types';
import netflix from '../../Assets/Netflix.png';
import bell from '../../Assets/Bell.svg';
import profile from '../../Assets/profile.svg';

export const Header = (props) => {

  let avgRating = props.ratings.reduce((acc, rating) => {
    return acc + rating.rating;
  }, 0) / props.ratings.length
	return (
    <article className="header_main-container">
      <Link to={'/'} className="header_main-link">
        <img className="netflix_logo" src={netflix}/>
      </Link>
      {
        !props.user
        ? <Link to={'/login'} className="header_log-button">Sign In</Link>
        : 
        <Dropdown data={props} rating={avgRating}/>
      }
    </article>
  )
}

export const mapStateToProps = state => ({
  ratings: state.ratings,
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch( logout() )
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  props: PropTypes.any,
  ratings: PropTypes.array,
  user: PropTypes.object
}
