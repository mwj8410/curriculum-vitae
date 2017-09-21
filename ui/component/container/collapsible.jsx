import React, { Component } from 'react';

import './collapsible.style.scss';

class ContainerCollapsible extends Component {
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
    return [ 'container-collapsible', (this.props.className || '') ].join(' ');
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className={ this.getClasses() } onClick={ this.toggleOpen }>
        <div className={ `title ${this.state.open ? 'open' : 'closed' }` }>
          <label>{ this.props.title }</label>
        </div>

        <div className={ `content ${this.state.open ? 'open' : 'closed' }` }>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default ContainerCollapsible;
