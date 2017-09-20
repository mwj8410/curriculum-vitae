// This is a dev only view
import React, { Component } from 'react';

// Components
import NavigationMain from 'Partial/navigation/navigation.jsx';

import HeadlineCardCarousel from 'Partial/headline/cardCarousel/cardCarousel.jsx';
import ContentCard from 'Partial/headline/cardCarousel/cardCarouselContentCard.jsx';

class DemoIndex extends Component {
  render() {
    return (
      <div className='view-demo-index'>
        <NavigationMain />
        <h1>Demo Index</h1>

          <HeadlineCardCarousel>
            <ContentCard col='1' row='1' cell-width='1' cell-height='1'>Item 1</ContentCard>
            <ContentCard col='1' row='2' cell-width='1' cell-height='1'>Item 2</ContentCard>
            <ContentCard col='2' row='1' cell-width='1' cell-height='1'>Item 3</ContentCard>
            <ContentCard col='2' row='2' cell-width='1' cell-height='1'>Item 4</ContentCard>
            <ContentCard col='3' row='1' cell-width='2' cell-height='1'>Item 5</ContentCard>
            <ContentCard col='3' row='2' cell-width='1' cell-height='1'>Item 6</ContentCard>
            <ContentCard col='4' row='2' cell-width='1' cell-height='1'>Item 7</ContentCard>
            <ContentCard col='5' row='1' cell-width='1' cell-height='2'>Item 8</ContentCard>
            <ContentCard col='6' row='1' cell-width='1' cell-height='1'>Item 9</ContentCard>
            <ContentCard col='6' row='2' cell-width='1' cell-height='1'>Item 10</ContentCard>
          </HeadlineCardCarousel>

      </div>
    );
  }
}

export default DemoIndex;
