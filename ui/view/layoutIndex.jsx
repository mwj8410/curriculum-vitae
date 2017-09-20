// This is a dev only view

import React, { Component } from 'react';

// Components
import ContainerStandard from 'Component/container/standard.jsx';

import NavigationMain from 'Partial/navigation/navigation.jsx';

class LayoutIndex extends Component {
  render() {
    return (
      <div className='view-component-index'>
        <NavigationMain />
        <h1>Layout Index</h1>

        <h4>Layout Containers</h4>
        <ContainerStandard>
          test
        </ContainerStandard>
      </div>
    );
  }
}

export default LayoutIndex;
