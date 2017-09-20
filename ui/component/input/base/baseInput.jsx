import React, { Component } from 'react';

import 'Style/component/input/baseInput.scss';

class BaseInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: ''
    };

    this.validate = this.validate.bind(this);
  }
  // Needs to accept validation patterns and error messages

  // needs an on change
  // needs to accept an onChange custom handler
  //

  getClasses() {
    let classes = ['input-base'].concat(this.props.className.split(' '));

    // console.log(this.props.className.split(' '));

    if (this.props.disabled === true) {
      classes.push('disabled');
    }

    if (this.props.required === true) {
      classes.push('required');
    }

    if (this.state.invalid === true) {
      classes.push('invalid');
    }

    return classes.join(' ');
  }

  validate() {
    // Validation may need to be functionality that is provided by the type specific input
    if (this.state.value.length === 0 || !this.props.validations || this.props.validations.length === 0) {
      // There is either nothing to validate or nothing to validate against.
      return;
    }
    let errorMessages = [];

    this.props.validations.forEach((validation) => {
      if (validation.pattern.test(this.state.value) === false) {
        errorMessages.push(validation.message);
      }
    });

    return errorMessages.join(' ');
  }

  render() {
    return (
      <div className={ this.getClasses() }>
        <label>{ this.props.label }</label>
        <div className='wrapper'>
          <div className='prompt-message'>{ this.props.prompt }</div>
          <input
              name={ this.props.name }
              onKeyUp={ this.validate }
              placeholder={ this.props.placeholder}
              type={ this.props.type }
              value={ this.state.value }
          />
          <div className='error-message'>{ this.state.errorMessage }</div>
        </div>
        <div className='overlay' />
      </div>
    );
  }
}

export default BaseInput;
