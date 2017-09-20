// This is a dev only view

import React, { Component } from 'react';

// Components
import ButtonAction from 'Component/control/buttonAction.jsx';
import ButtonNav from 'Component/control/buttonNav.jsx';

import Toggle from 'Component/input/toggle.jsx';

import IconConfigure from 'Component/icon/configure.jsx';

import DurationClock from 'Component/indicator/durationClock.jsx';

import NavigationMain from 'Partial/navigation/navigation.jsx';

class ComponentIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clockConfig1: {
        startedAt: new Date(new Date() - ( 60 * 20 * 1000 )),
        duration: ( 60 * 25 )
      }
    };

    this.startTimer = this.startTimer.bind(this);
  }
  startTimer() {
    this.setState({
      timer1Running: true
    });
  }
  render() {
    return (
      <div className='view-component-index'>
        <NavigationMain />
        <h1>Component Index</h1>

        <h2>Controls</h2>
        <ButtonAction>normal Action Button</ButtonAction> <br />
        <ButtonAction primary>Primary Action Button</ButtonAction> <br />
        <ButtonAction secondary>Secondary Action Button</ButtonAction> <br />

        <br />

        <ButtonNav>Nav</ButtonNav> <br />

        <h2>Inputs</h2>
        <Toggle />

        <h2>Icons</h2>
        <IconConfigure />
        <IconConfigure small />
        <IconConfigure large />
        <IconConfigure xsmall />
        <IconConfigure outlined />

        <h2>Indicators</h2>
        <DurationClock config={ this.state.clockConfig1 } running={ this.state.timer1Running }/>
        <button onClick={ this.startTimer }>Run Clock</button>

      </div>
    );
  }
}

export default ComponentIndex;
