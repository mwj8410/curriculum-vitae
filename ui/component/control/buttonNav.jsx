import React, { Component } from 'react';

import ButtonBase from './base/buttonBase.jsx';

require('Style/component/control/button/buttonNav.scss');

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
