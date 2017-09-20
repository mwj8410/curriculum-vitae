import React, { Component } from 'react';

/**
 * The intention of this component is to express a dynamic interface for providing specific
 * information in a specific structure.
 **/

// Components
import TextBlock from 'Component/input/textBlock.jsx';

import TransitionDetail from './sub/transitionDetail.jsx';

import IconColumns from 'Component/icon/columns.jsx';
import IconPlus from 'Component/icon/plus.jsx';

import 'Style/partial/storyNode.scss';

class StoryNode extends Component {
  constructor(props) {
    super(props);

    // ToDo: Development only
    // NodeState will be provided to the component
    this.state = {
      selectedTransition: 1,
      transitionBankExpanded: false,
      nodeState: {
        id: 'a UUID',
        name: 'Node Name',
        tags: [ 'id1', 'id2' ],
        content: 'this is alot of content',
        transitions: [
          {
            key: 1,
            id: 1,
            case: 'always',
            text: 'But I like the cookie.',
            effect: 'This would be code'
          }
        ]
      }
    };

    this.selectTransition = this.selectTransition.bind(this);
    this.syncChanges = this.syncChanges.bind(this);
    this.transitionAdd = this.transitionAdd.bind(this);
    this.transitionBankToggle = this.transitionBankToggle.bind(this);
    this.transitionSelect = this.transitionSelect.bind(this);
  }

  selectTransition(id, value) {
    // Zero or one transition can be active at a time.
    this.setState({
      selectedTransition: value === true ? id : undefined
    });
  }

  syncChanges(valueName, content) {
    let changeObj = {
      nodeState: this.state.nodeState
    };
    changeObj.nodeState[valueName] = content;
    this.setState(changeObj);
  }

  transitionAdd() {
    // Get the new Id by mapping all existing ids, then sorting them descending
    // then pull the first one off the top and add 1 to it's id
    const newId = this.state.nodeState.transitions.map((transition) => transition.id).sort((a, b) => b - a)[0] + 1;

    this.state.nodeState.transitions.push({
      id: newId,
      key: newId,
      case: 'always',
      text: 'That cookie is terrible!',
      effect: 'This would be code'
    });
    this.setState({ value: event.target.value });
  }

  transitionBankToggle() {
    this.setState({
      transitionBankExpanded: !this.state.transitionBankExpanded
    });
  }

  transitionSelect(newId) {
    console.log(arguments);
    if (this.state.transitionBankExpanded === true) {
      return;
    }

    this.setState({
      selectedTransition: newId
    });
  }

  render() {
    const transitions = this.state.nodeState.transitions.map((transition) => {
      return (
        <TransitionDetail
            { ...transition }
            onClick={ this.transitionSelect }
            selected={ this.state.selectedTransition }
            sync={ this.selectTransition }
        />
      );
    });

    return (
      <div className='story-node'>
        <div className='node-tracking-details'>
          <input
              name='nodeName'
              type='text'
              value={ this.state.nodeState.name }
          />
          <div className='tag-bank'></div>
          { /* Needs a way to add tags */ }
        </div>
        <div className='node-main-block'>
          <TextBlock
              onChange={ this.handleChangeContent }
              name='content'
              sync={ this.syncChanges }
              value={ this.state.nodeState.content }
          />
          <div className={ 'transition-bank' + (this.state.transitionBankExpanded === true ? ' expanded' : '') }>
            <div className='column-toggle' onClick={ this.transitionBankToggle }>
              <IconColumns xsmall outline />
            </div>
            <div className='transitions'>
              { transitions }
            </div>
            <div className='icon-add' onClick={ this.transitionAdd }>
              <IconPlus xsmall />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoryNode;
