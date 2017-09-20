// This is a dev only view

import React, { Component } from 'react';

// Components
import FieldEmail from 'Component/input/field/email.jsx';
import FieldNumber from 'Component/input/field/number.jsx';
import FieldText from 'Component/input/field/text.jsx';

import TextBlock from 'Component/input/textBlock.jsx';

// Containers
import ContainerRow from 'Component/container/row.jsx';

import NavigationMain from 'Partial/navigation/navigation.jsx';

class InputIndex extends Component {
  render() {
    return (
      <div className='view-component-index'>
        <NavigationMain />
        <h1>Input Index</h1>

        <h4>Fields</h4>
        <div style={{
          background: 'grey',
          margin: '0 32px',
          width: '300px' }}
        >
          <FieldNumber name='num' label='Number' />
          <FieldText name='text' label='Text' />
          <FieldEmail name='email' label='Email' />
          <FieldNumber name='number4' label='Number' />
          <FieldNumber name='number5' label='Number' />
        </div>

        <h4>Text Block</h4>

        <ContainerRow>
          test
        </ContainerRow>

        <TextBlock />
      </div>
    );
  }
}

export default InputIndex;
