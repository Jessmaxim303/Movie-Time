import React, { Component } from 'react';
import './Dropdown.css';
import profile from '../../Assets/profile.svg';

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    }
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover(e) {
  	console.log(this.props)
    e.preventDefault();
    this.setState(prevState => ({isHovered: !prevState.isHovered}));
}

changeValue(e) {
  this.setState({dropDownValue: e.currentTarget.textContent})
}

  render() {
  return (
    <div className="App" onClick={this.toggleHover}>
      {this.state.isHovered ? 
      	<div className="drop_container"> 
      	<img  className="header_drop-icon" src={profile} />
         <section className="dropdown_menu">
            <h4 className='dropdown_user-name'>Welcome</h4>
           	<h4 className='dropdown_user-name'>{this.props.data.user.name}</h4>
           	<h4 className='dropdown_user-name'>Avg. Rating: {this.props.rating}</h4>
           	<h4 className='dropdown_user-name'>Number of Ratings: {this.props.data.ratings.length}</h4>
           	<div className='dropdown_menu-containers'>
           	  <button className='dropdown_user-logoff'>Sign Off</button>
           </div>
         </section>
         </div>
         :
         <img  className="header_profile-icon" src={profile} />
      }
    </div>
  );
}
}

export default Dropdown;