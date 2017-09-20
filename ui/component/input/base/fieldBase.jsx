import React, { Component } from 'react';

import 'Style/component/input/base/fieldBase.scss';

class BaseField extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    if (this.props.noResize !== true) {
      // If the label is larger than the space,
      // we walk through the font sizes until we hit one that fits,
      // or we run out of sizes.
      window.requestAnimationFrame(() => {
        const labelEle = this._element.querySelector('label');
        const sizeClasses = [ 'text-md', 'text-sm', 'text-xs' ];
        let i = 0;

        while (labelEle.scrollWidth > labelEle.offsetWidth && i < sizeClasses.length) {
          if (i > 0) {
            labelEle.classList.remove(sizeClasses[i - 1]);
          }
          labelEle.classList.add(sizeClasses[i]);
          i++;
        }
      });
    }
  }

  getClasses() {
    let classes = ['field-base'].concat(this.props.className.split(' '));

    if (this.props.disabled === true) {
      classes.push('disabled');
    }

    if (this.props.required === true) {
      classes.push('required');
    }

    if (this.props.invalid === true) {
      classes.push('invalid');
    }

    return classes.join(' ');
  }

  render() {
    return (
      <div
        className={ this.getClasses() }
        ref={ (el) => this._element = el }
      >
        <label>{ this.props.label }</label>
        <div className='wrapper'>
          <div className='prefix'>{ this.props.prefix }</div>
          { this.props.children }
          <div className='suffix'>{ this.props.suffix }</div>
          <div className='error-message'>{ this.props.errorText }</div>
        </div>
        <div className='overlay' />
      </div>
    );
  }
}

export default BaseField;
