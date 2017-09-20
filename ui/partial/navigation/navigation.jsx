import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components

import './navigation.style.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <nav className='nav-main'>
        <div className='wrapper-logo'>Phae Kit</div>

        <div className='nav-item'><Link className='interior-link' to='/'>Dashboard</Link></div>
        <div className='nav-item'><Link className='interior-link' to='/StoryPartials'>Story Partials</Link></div>
        <div className='nav-item'><Link className='interior-link' to='/ComponentIndex'>Component Index</Link></div>
        <div className='nav-item'><Link className='interior-link' to='/InputIndex'>Input Index</Link></div>
        <div className='nav-item'><Link className='interior-link' to='/FormIndex'>Form Index</Link></div>
        <div className='nav-item'><Link className='interior-link' to='/LayoutIndex'>Layout Index</Link></div>

        <div className='spacer' />

        <div className='nav-item'>Final Control</div>
      </nav>
    );
  }
}

export default Navigation;
