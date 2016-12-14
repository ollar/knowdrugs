import { ActionConst } from 'react-native-router-flux';
import { Map } from 'immutable';

const initialState = Map({
  scene: {},
});

export default function routerReducer(state = initialState, action) {
  switch (action.type) {
    case ActionConst.FOCUS:
      return state.merge({
        scene: action.scene,
      });

    default:
      return state;
  }
}
