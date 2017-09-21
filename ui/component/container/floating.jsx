import React, { Component } from 'react';

import './floating.style.scss';

class ContainerFloating extends Component {
  constructor(props) {
    super(props);
    this.getClasses = this.getClasses.bind(this);
  }

  // Pull any passed in class out of the instance and return it
  getClasses() {
    return [ 'container-floating', (this.props.className || '') ].join(' ');
  }

  render() {
    return (
      <div className={ this.getClasses() }>
        <div className='inner'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default ContainerFloating;
