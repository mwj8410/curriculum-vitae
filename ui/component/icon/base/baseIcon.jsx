import React, { Component } from 'react';

import 'Style/component/icon.scss';

class BaseIcon extends Component {
  constructor(props) {
    super(props);
    this.getClass = this.getClass.bind(this);
  }

  getClass() {
    let cssClasses = ['icon-base'];

    if (this.props.xsmall === true) {
      cssClasses.push('x-small');
    } else if (this.props.small === true) {
      cssClasses.push('small');
    } else if (this.props.large === true) {
      cssClasses.push('large');
    }

    if (this.props.outlined === true) {
      cssClasses.push('outlined');
    }

    return cssClasses.join(' ');
  }

  render() {
    return (
      <div className={ this.getClass() }>
        { this.props.children }
      </div>
    );
  }
}

export default BaseIcon;
