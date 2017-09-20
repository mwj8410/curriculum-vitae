import React, { Component } from 'react';

import IconConfigure from 'Component/icon/configure.jsx';

import Toggle from 'Component/input/toggle.jsx';

class TransitionDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected,
      isSelected: props.id === props.selected
    };

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.bubbleChange = this.bubbleChange.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProp) {
    this.setState({
      selected: nextProp.selected,
      isSelected: nextProp.id === nextProp.selected
    });
  }

  bubbleChange(id, value) {
    if (typeof this.props.sync === 'function') {
      this.props.sync(id, value);
    }
  }

  getClasses() {
    return [
      'transition-detail',
      (this.props.className || ''),
      (this.state.isSelected ? 'selected' : '')
    ].join(' ');
  }

  handleClick(event) {
    if (this.props.onClick) {
      event.stopPropagation();
      this.props.onClick(this.props.id);
    }
  }

  render() {
    return (
      <div className={ this.getClasses() } onClick={ this.handleClick }>
        <Toggle
            xsmall
            name={ this.props.id }
            onChange={ this.bubbleChange }
            value={ this.state.isSelected }
        />
        <div className='control-wrapper'>Case</div>
        <div className='transition-text'>{ this.props.text }</div>
        <div className='control-wrapper'>Effect</div>
        <div className='control-bank'>
          <IconConfigure xsmall outlined />
        </div>
      </div>
    );
  }
}

export default TransitionDetail;
