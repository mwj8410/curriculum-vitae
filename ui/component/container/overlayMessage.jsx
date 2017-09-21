import React, { Component } from 'react';

import './overlayMessage.style.scss';

class OverlayMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.getClasses = this.getClasses.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  // Pull any passed in class out of the instance and return it
  getClasses() {
    return [ 'overlay-message', (this.props.className || '') ].join(' ');
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className={ this.getClasses() }>
        <div className='backdrop' />
        <h1 className='message'>{ this.props.message }</h1>
      </div>
    );
  }
}

export default OverlayMessage;
