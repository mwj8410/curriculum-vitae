import log from '../log';

// export const SET_PROFILE = 'SET_PROFILE';
export const setProfile = (profile) => {
  log.activity('Profile Actions', 'setProfile', 'setting.');
  return {
    type: 'setProfile',
    payload: profile
  };
};

// export const GET_PROFILE = 'GET_PROFILE';
export const getProfile = (profile) => {
  log.activity('Profile Actions', 'getProfile', 'fetching.');
  return {
    type: 'getProfile',
    payload: profile
  };
};
