import React, { Component } from 'react';

// Components
import ContainerCollapsible from 'Component/container/collapsible.jsx';
import ContainerStandard from 'Component/container/standard.jsx';

class RegisterView extends Component {
  render() {
    return (
      <div className='nim-dashboard'>
        <ContainerStandard>
          <h1>Dashboard</h1>
          <ContainerCollapsible title='Instructions'>
            <p>Some Stuff</p>
          </ContainerCollapsible>
          <p>stuff</p>
        </ContainerStandard>
      </div>
    );
  }
}

export default RegisterView;
