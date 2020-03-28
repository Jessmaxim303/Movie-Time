import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';
import PropTypes from 'prop-types';
import netflix from '../../Assets/Netflix.png';
import bell from '../../Assets/Bell.svg';

export const Header = (props) => {
  let avgRating = props.ratings.reduce((acc, rating) => {
    return acc + rating.rating;
  }, 0) / props.ratings.length
	return (
    <article className="header_main-container">
      <Link to={'/'} className="header_main-link">
        <img className="netflix_logo" src={netflix}/>
      </Link>
      <h3 className="header_button">Search</h3>
      <h3 className="header_button">Kids</h3>
      <img className="netflix_logo" src={bell}/>
      {!props.user
      ? null
      : <article className="header_welcome-text">
          <h1>Welcome, {props.user.name}!</h1>
          <h3> Avg. Rating: {avgRating.toFixed(2)} </h3>
          <h3>Number of Ratings: {props.ratings.length}</h3>
        </article>}
      {
        !props.user
        ? <Link to={'/login'} className="header_log-button">Sign In</Link>
        : <Link to={'/'} className="header_log-button"
        onClick={() => props.logout() }>Logout</Link>
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
