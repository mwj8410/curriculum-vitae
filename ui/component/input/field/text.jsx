import React, { Component } from 'react';

import InputBase from 'Component/input/base/fieldBase.jsx';

import 'Style/component/input/field/text.scss';

class FieldText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invalid: false,
      value: props.value
    };

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentWillReceiveProps(nextProp) {
    this.setState({
      value: nextProp.value
    });
  }

  handleChange(event) {
    const inputEle = this._element;
    const sizeClasses = [ 'text-md', 'text-sm', 'text-xs' ];
    let i = 0;

    this.validate();
    this.setState({ value: event.target.value }, () => {
      // Synchronize with parent if indicated
      if (this.props.sync && typeof this.props.sync === 'function') {
        console.log('notifying');
        this.props.sync(
          this.props.name,
          {
            invalid: this.state.invalid,
            value: this.state.value
          }
        );
      }
    });

    sizeClasses.forEach((item) => inputEle.classList.remove(item));
    while (inputEle.scrollWidth > inputEle.offsetWidth && i < sizeClasses.length) {
      if (i > 0) {
        inputEle.classList.remove(sizeClasses[i - 1]);
      }
      inputEle.classList.add(sizeClasses[i]);
      i++;
    }
  }

  validate() {
    const currentValue = this.state.value;
    let errors = [];

    if (!this.props.validations) {
      return;
    }

    this.props.validations.forEach((validation) => {
      if (validation.pattern.test(currentValue) === false) {
        errors.push(validation.message);
      }
    });

    if (errors.length > 0) {
      this.setState({
        invalid: true,
        errorText: errors.join(' ')
      });
    } else {
      this.setState({
        invalid: false,
        errorText: ''
      });
    }
  }

  render() {
    return (
      <InputBase
          className='field-text'
          label={ this.props.label }
      >
        <input
          max={ this.props.max }
          min={ this.props.min }
          name={ this.props.name }
          onBlur={ this.handleChange }
          onChange={ this.handleChange }
          onKeyUp={ this.handleChange }
          placeholder={ this.props.placeholder}
          ref={ (el) => this._element = el }
          type='text'
          value={ this.props.value }
        />
      </InputBase>
    );
  }
}

export default FieldText;
