// This is a dev only view
import React, { Component } from 'react';

// Components
import NavigationMain from 'Partial/navigation/navigation.jsx';

import FormContact from 'Partial/form/contact.jsx';

class FormIndex extends Component {
  render() {
    return (
      <div className='view-demo-index'>
        <NavigationMain />
        <h1>Form Index</h1>
        <FormContact />
      </div>
    );
  }
}

export default FormIndex;
