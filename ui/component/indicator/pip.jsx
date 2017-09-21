import React, { Component } from 'react';

import './pip.style.scss';

class IndicatorPip extends Component {
  constructor(props) {
    super(props);
    this.getClasses = this.getClasses.bind(this);
  }

  // Pull any passed in class out of the instance and return it
  getClasses() {
    let classes = ['indicator-pip'];

    if (this.props.final) {
      classes.push('final');
    }

    if (this.props.taken) {
      classes.push('taken');
    }

    return classes.join(' ');
  }

  render() {
    return (
      <div className={ this.getClasses() } />
    );
  }
}

export default IndicatorPip;
