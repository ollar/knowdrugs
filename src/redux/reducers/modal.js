import { Map } from 'immutable';

const initialState = Map({});

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case 'REGISTER_MODAL':
      return state.set(action.id, false);

    case 'SET_MODAL_VISIBILITY':
      return state.setIn([action.id], action.visibility);

    default:
      return state;
  }
}
