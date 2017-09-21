import React, { Component } from 'react';

// Components
import ContainerCollapsible from 'Component/container/collapsible.jsx';
import ContainerFloating from 'Component/container/floating.jsx';
import OverlayMessage from 'Component/container/overlayMessage.jsx';

import ControlButtonCircle from 'Component/control/button/buttonCircle.jsx';

import IndicatorPip from 'Component/indicator/pip.jsx';

const generatePips = () => {
  let pipSet = Array.from(
    { length: 12 },
    () => {
      return {
        final: false,
        taken: false
      };
    }
  );

  pipSet[pipSet.length - 1].final = true;
  return pipSet;
};

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersTurn: true,
      playerTook: 0,
      pips: generatePips(),
      showEndMessage: false
    };

    this.computersTurn = this.computersTurn.bind(this);
    this.computerWin = this.computerWin.bind(this);
    this.reset = this.reset.bind(this);
    this.takeOne = this.takeOne.bind(this);
    this.takeThree = this.takeThree.bind(this);
    this.takeTwo = this.takeTwo.bind(this);
  }

  computersTurn() {
    let take = 4 - this.state.playerTook;

    let updatedPips = this.state.pips;
    let partialPips = updatedPips.filter((pip) => pip.taken === false);

    if (partialPips.length <= 3) {
      return this.computerWin();
    }

    partialPips[0].taken = true;

    if (take > 1) {
      partialPips[1].taken = true;
    }
    if (take > 2) {
      partialPips[2].taken = true;
    }

    this.setState({
      pips: updatedPips
    });

    setTimeout(() => {
      this.setState({
        playersTurn: true
      });
    }, 1500);
  }

  computerWin() {
    this.setState({
      showEndMessage: true
    })
    setTimeout(this.reset, 2000);
  }

  reset() {
    this.setState({
      playersTurn: true,
      playerTook: 0,
      pips: generatePips(),
      showEndMessage: false
    });
  }

  takeOne() {
    if (!this.state.playersTurn) {
      return;
    }

    let updatedPips = this.state.pips;
    updatedPips.filter((pip) => pip.taken === false)[0].taken = true;
    this.setState({
      playerTook: 1,
      playersTurn: false,
      pips: updatedPips
    });

    setTimeout(this.computersTurn, 1500);
  }

  takeTwo() {
    if (!this.state.playersTurn) {
      return;
    }

    let updatedPips = this.state.pips;
    let partialPips = updatedPips.filter((pip) => pip.taken === false);

    partialPips[0].taken = true;
    partialPips[1].taken = true;

    this.setState({
      playerTook: 2,
      playersTurn: false,
      pips: updatedPips
    });

    setTimeout(this.computersTurn, 1500);
  }

  takeThree() {
    if (!this.state.playersTurn) {
      return;
    }

    let updatedPips = this.state.pips;
    let partialPips = updatedPips.filter((pip) => pip.taken === false);

    partialPips[0].taken = true;
    partialPips[1].taken = true;
    partialPips[2].taken = true;

    this.setState({
      playerTook: 3,
      playersTurn: false,
      pips: updatedPips
    });

    setTimeout(this.computersTurn, 1500);
  }

  render() {
    return (
      <div className='nim-dashboard'>
        <ContainerFloating>
          <h1>Dr. NIM</h1>
        </ContainerFloating>

        <ContainerFloating>
          <ContainerCollapsible title='Instructions'>
            <p>Your goal is to take the last pip.</p>
            <p>You and the computer take turns removing 1, 2, or 3 pips.</p>
            <p>And it is your turn first.</p>
          </ContainerCollapsible>
        </ContainerFloating>

        <div className='wrapper-content'>
          <ContainerFloating>
            <div className='control-track'>
              <label>Take</label>
              <ControlButtonCircle onClick={ this.takeOne }>1</ControlButtonCircle>
              <ControlButtonCircle onClick={ this.takeTwo }>2</ControlButtonCircle>
              <ControlButtonCircle onClick={ this.takeThree }>3</ControlButtonCircle>
            </div>
          </ContainerFloating>

          <ContainerFloating>
            <div className='pip-track'>
              {
                this.state.pips.map((pip, key) => {
                  return <IndicatorPip key={ key } taken={ pip.taken } final={ pip.final }/>
                })
              }
            </div>
          </ContainerFloating>
        </div>

        { this.state.showEndMessage ? <OverlayMessage message='Computer Wins' /> : '' }
      </div>
    );
  }
}

export default DashboardView;
