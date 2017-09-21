import React, { Component } from 'react';

import ButtonBase from './buttonBase.jsx';

import './buttonNav.style.scss';

class ButtonAction extends Component {
  constructor(props) {
    super(props);
    this.getClasses = this.getClasses.bind(this);
  }

  getClasses() {
    return 'nav';
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
