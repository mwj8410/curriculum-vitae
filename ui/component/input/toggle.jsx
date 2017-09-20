import React, { Component } from 'react';

import IconCheckBox from 'Component/icon/checkBox.jsx';
import IconCheckBoxEmpty from 'Component/icon/checkBoxEmpty.jsx';

import 'Style/component/input/toggle.scss';

class ButtonAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value === true || false
    };

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.toggle =this.toggle.bind(this);
  }

  componentWillReceiveProps(nextProp) {
    this.setState({
      value: nextProp.value === true || false
    });
  }

  toggle() {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.props.name, !this.state.value);
    }
  }

  render() {
    return (
      <button
        className='toggle'
        onClick={ this.toggle }
      >
        { this.state.value === true ? (<IconCheckBox { ...this.props } />) : (<IconCheckBoxEmpty { ...this.props } />) }
      </button>
    );
  }
}

export default ButtonAction;
