import React, { Component } from 'react';

import ContainerStandard from './standard.jsx';

import './row.style.scss';

class ContainerRow extends Component {
  render() {
    return (
      <ContainerStandard className='container-row'>
        { this.props.children }
      </ContainerStandard>
    );
  }
}

export default ContainerRow;
