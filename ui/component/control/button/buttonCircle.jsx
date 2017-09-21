import React, { Component } from 'react';

import ButtonBase from './buttonBase.jsx';

import './buttonCircle.style.scss';

class ButtonAction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ButtonBase
        { ...this.props }
        className='button-circle'
      >
        { this.props.children }
      </ButtonBase>
    );
  }
}

export default ButtonAction;
