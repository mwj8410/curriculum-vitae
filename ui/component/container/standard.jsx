import React, { Component } from 'react';

import './standard.style.scss';

class ContainerStandard extends Component {
  constructor(props) {
    super(props);
    this.getClasses = this.getClasses.bind(this);
  }

  // Pull any passed in class out of the instance and return it
  getClasses() {
    return [ 'container-standard', (this.props.className || '') ].join(' ');
  }

  render() {
    return (
      <div className={ this.getClasses() }>
        { this.props.children }
      </div>
    );
  }
}

export default ContainerStandard;
