import React, { Component } from 'react';

// Components

import 'Style/partial/headline/cardCarousel.scss';

const cellMeasurement = 150;
const supportedColumns = 10;

class CardCarosel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardSignatures: []
    };

    this.initialize = this.initialize.bind(this);
    // this.renderCard = this.renderCard.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(this.initialize);
  }

  initialize() {
    // This needs to run after the dom has been rendered.
    let cardElements = this._element.querySelectorAll('.headline-card-carousel-content-card');
    let cardSigs = [];

    this._element.classList.add('opening-animation');

    // First, ensure that they all have sizing
    cardElements.forEach(ele => {
      let thisSig = {
        element: ele,
        column: Number(ele.getAttribute('data-col'))
      };

      // console.log(ele.getAttribute('data-col'));
      // let colPos = Number(ele.getAttribute('data-col'));
      // thisSig.col =
      ele.style.left = `calc(120% + ${cellMeasurement * (thisSig.column -1)}px)`;

      // Set the vertical position of the cell
      if (ele.getAttribute('data-row') === '2') {
        ele.style.top = `${cellMeasurement}px`;
      } else {
        ele.style.top = '0';
      }

      cardSigs.push(thisSig);
    });

    window.setTimeout(() => {
      cardSigs.forEach((sig) => sig.element.style.left = `${cellMeasurement * (sig.column -1)}px`);
      window.setTimeout(() => {
        // this._element.classList.remove('opening-animation');
      }, 0.1 * supportedColumns);
    }, 100);
  }

  render() {
    return (
      <div
        className='headline-card-carousel'
        ref={ (el) => this._element = el }
      >
        { this.props.children }
      </div>
    );
  }
}

export default CardCarosel;
