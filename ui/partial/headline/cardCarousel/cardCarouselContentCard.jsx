import React, { Component } from 'react';

// Components

class CardCaroselContentCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attributes: {
        'data-cell-height': props['cell-height'],
        'data-cell-width': props['cell-width'],
        'data-col': props.col,
        'data-row': props.row
      }
    };
  }

  render() {
    return (
      <div className='headline-card-carousel-content-card' { ...this.state.attributes }>
        { this.props.children }
      </div>
    );
  }
}

export default CardCaroselContentCard;
