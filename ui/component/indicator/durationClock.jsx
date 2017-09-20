/**
 * Duration clock
 *
 * <DurationClock config={ {startedAt: <datetime of start>, duration: <time in seconds> } } running={ false } />
 *
 * An element that indicates the remaining time for an action. Supports a second hand and a minute hand that displays
 * if the total duration meets or exceeds 5 minutes.
 *
 * This element is un-tested!!
 **/

import React, { Component } from 'react';

import 'Style/component/indicator/durationClock.scss';

class DurationClock extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ id: 'test' }, props.config);

    this.getStyleMinuteHand = this.getStyleMinuteHand.bind(this);
    this.getStyleSecondHand = this.getStyleSecondHand.bind(this);
    this.startClock = this.startClock.bind(this);
  }

  componentDidMount() {
    const me = this;
    if (this.state.startedAt) {
      window.requestAnimationFrame(function() {
        me.startClock();
      });
    }
  }

  componentWillReceiveProps(nextProp) {
    if (!this.state.started && nextProp.running === true) {
      this.setState({
        started: new Date()
      });
      this.startClock();
    }
  }

  getStyleMinuteHand() {
    let deg;
    let remaining = this.state.duration / 60; // duration is in seconds

    if (this.state.startedAt) {
      remaining = Math.round(
        remaining -
        (
          ((new Date() - this.state.startedAt) / 1000)  // how many seconds
          / 60 // converted to minutes
        ) // elapsed time in minutes
      );
    }
    // (total time - (total tile - elapsed time)) over 60 minutes
    deg = ( (this.state.duration / 60) - ((this.state.duration / 60) - (remaining))) / 60 * 360;

    return {
      transform: `rotate(${deg}deg)`,
      transition: `all ${remaining * 60}s linear`
    };
  }

  getStyleSecondHand() {
    let deg;
    let remaining = this.state.duration;

    if (this.state.startedAt) {
      remaining = Math.round(
        remaining - ((new Date() - this.state.startedAt) / 1000)  // how many seconds
      );
    }
    // (total time - (total tile - elapsed time)) over 60 minutes
    deg = (this.state.duration - (this.state.duration - (remaining))) / 60 * 360;

    return {
      transform: `rotate(${deg}deg)`,
      transition: `all ${remaining}s linear`
    };
  }

  startClock() {
    document.querySelectorAll(`#${this.state.id} .timer-hand`)
      .forEach((ele) => {
        ele.style.transform = 'rotate(0deg)';
      });
  }

  render() {
    return (
      <div className='duration-clock'>
        <svg id={ this.state.id } width='256' height='256'>
          <g>
            <circle style={ { stroke: 'black', fill: '#f8f8f8' } } cx='100' cy='100' r='100' />
          </g>
          <g>
            {
              [...Array(12)].map((e, i) =>
                <line
                  className='tick'
                  key={i}
                  x1='100'
                  y1='10'
                  x2='100'
                  y2='0'
                  style={ { transform: `rotate(${360 / 12 * i}deg)` } }
                />)
            }
          </g>
          <g>
            {
              this.state.duration >= 60 * 5 ?
                <line className='timer-hand minute-hand'
                      x1='100'
                      y1='100'
                      x2='100'
                      y2='20.0'
                      style={ this.getStyleMinuteHand() }
                /> : ''
            }

            <line className='timer-hand second-hand'
                x1='100'
                y1='100'
                x2='100'
                y2='10.0'
                style={ this.getStyleSecondHand() }
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default DurationClock;
