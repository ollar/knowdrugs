import { Map } from 'immutable';

const initialState = Map({
  locale: 'ru',
});

export default function localeReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return state.merge({ locale: action.locale });

    default:
      return state;
  }
}
