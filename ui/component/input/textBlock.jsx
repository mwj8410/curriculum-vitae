import React, { Component } from 'react';

import 'Style/component/input/textBlock.scss';

class TextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };

    this.bubbleChange = this.bubbleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getClasses() {
    let cssClasses = ['input-text-block'];
    return cssClasses.join(' ');
  }

  handleChange(event) {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
    this.setState({ value: event.target.value });
  }

  bubbleChange() {
    if (typeof this.props.sync === 'function') {
      this.props.sync(this.props.name, this.state.value);
    }
  }

  render() {
    return (
      <textarea
        className={ this.getClasses() }
        name={ this.props.name }
        onBlur={ this.bubbleChange }
        onChange={ this.handleChange }
        value={ this.state.value }
      />
    );
  }
}

export default TextBlock;
