import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import * as Profile from '../../service/actions/profile.actions';

// Components
import ContainerFixedTop from 'Component/container/fixed-top.jsx';

import './appNavigation.style.scss';

class AppNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.props.setProfile({ nameDisplay: 'value' });
    console.log(this.props);
  }

  // componentWillReceiveProps(props) {
  //   console.log(props);
  // }

  componentDidMount() {

  }

  render() {
    return (
      <ContainerFixedTop>
        <nav className='nav-application'>
          <div className='control control-application'>Application</div>
          <div className='control control-user'>
            { this.props.Profile.nameDisplay || 'User'}
          </div>
        </nav>
      </ContainerFixedTop>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Profile: state.Profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (values) => {
      dispatch(Profile.setProfile(values));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavigation);
