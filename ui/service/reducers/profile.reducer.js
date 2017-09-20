import * as ProfileActions from '../actions/profile.actions';

let initialState = {};

function Profile(state = initialState, action) {
  switch (action.type) {

  case 'setProfile':
    return Object.assign({}, state, action.payload);

  case 'getProfile':
    return state;

  default:
    return state;
  }
}

export default Profile;


// function visibilityFilter(state = 'SHOW_ALL', action) {
//   switch (action.type) {
//   case 'SET_VISIBILITY_FILTER':
//     return action.filter;
//   default:
//     return state;
//   }
// }
//
// function todos(state = [], action) {
//   switch (action.type) {
//
//   case 'SET_PROFILE':
//     return [
//       ...state,
//       {
//         text: action.text,
//         completed: false
//       }
//     ];
//
//   case 'GET_PROFILE':
//     return state.map((todo, index) => {
//       if (index === action.index) {
//         return Object.assign({}, todo, {
//           completed: true
//         });
//       }
//       return todo;
//     });
//
//   default:
//     return state;
//   }
// }
