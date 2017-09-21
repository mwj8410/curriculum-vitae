import React, { Component } from 'react';

import ButtonBase from './buttonBase.jsx';

import './buttonAction.style.scss';

class ButtonAction extends Component {
  constructor(props) {
    super(props);

    this.getClasses = this.getClasses.bind(this);
  }

  getClasses() {
    // Functionally white-list each button type and restrict to only allow
    // the action button to be of one type.
    let cssClasses = ['action'];
    if (this.props.primary) {
      cssClasses.push( 'primary');
    } else if (this.props.secondary) {
      cssClasses.push( 'secondary');
    }
    return cssClasses.join(' ');
  }

  render() {
    return (
      <ButtonBase
          { ...this.props }
          className={ this.getClasses() }
      >
        { this.props.children }
      </ButtonBase>
    );
  }
}

export default ButtonAction;
