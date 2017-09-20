/* global require */

const log = require('./log');

let actions = [];

export function configure(newActions) {
  actions = newActions[0];
}

export function async(action, store) {
  // console.log(actions);

  if (actions[action.type]) {
    log.activity('Rest', 'async', `Initiating change request to remote for ${action.type}`);

    // For now, we will simply delay to simulate the API call
    setTimeout(() => {
      log.activity('Rest', 'async', `Received change order for ${action.type}`);
      console.log(store);
      // console.log(actions[action.type]);
      store.dispatch(actions[action.type], Object.assign({}, { test: 'response body value here' }), action.payload);
    }, 1000);
  } else {
    log.warning('Rest', 'async', `Unknown action type ${action.type}`);
  }
}

export default {
  async,
  configure
};


//
// return function(dispatch) {
//   axios.get(window.url_api+'/exercises/'+id, {headers:{'Authorization':'Bearer '+context.props.token}})
//     .then(response => {
//       dispatch({
//         type: 'GET_EXERCISE_ID',
//         payload: response.data
//       })
//     })
// }
