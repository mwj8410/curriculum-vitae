import React, { Component } from 'react';

// Components
import ButtonAction from 'Component/control/buttonAction.jsx';

import FieldEmail from 'Component/input/field/email.jsx';
import FieldText from 'Component/input/field/text.jsx';

import 'Style/partial/form/contact.scss';

class FormContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: {}
    };

    this.submit = this.submit.bind(this);
    this.synchronize = this.synchronize.bind(this);
  }

  submit() {
    console.log(this.state.formState);
  }

  synchronize(valueName, value) {
    const currentFormState = this.state.formState;
    currentFormState[valueName] = value;
    this.setState({
      formState: currentFormState
    });
  }

  render() {
    return (
      <div className='form-contact'>
        <FieldText name='fName' label='First Name' sync={ this.synchronize } />
        <FieldText name='lName' label='Last Name' sync={ this.synchronize } />
        <FieldEmail name='email' label='Email' sync={ this.synchronize } />
        <br />
        <ButtonAction onClick={ this.submit }>Submit</ButtonAction>
      </div>
    );
  }

}

export default FormContact;
