import React, { Component } from 'react';

import InputBase from 'Component/input/base/fieldBase.jsx';

import 'Style/component/input/field/number.scss';

class FieldNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invalid: false,
      value: props.value
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProp) {
    this.setState({
      value: nextProp.value
    });
  }

  handleChange(event) {
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
  }

  render() {
    return (
      <InputBase
          className='field-number'
          label={ this.props.label }
      >
        <input
          name={ this.props.name }
          onBlur={ this.handleChange }
          onChange={ this.handleChange }
          onKeyUp={ this.handleChange }
          placeholder={ this.props.placeholder}
          type='number'
          value={ this.props.value }
        />
      </InputBase>
    );
  }
}

export default FieldNumber;
