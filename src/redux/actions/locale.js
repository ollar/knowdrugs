import I18n from '../../translations';

export function changeLocale(id) {
  return (dispatch) => {
    I18n.locale = id;

    return dispatch({
      type: 'CHANGE_LOCALE',
      locale: 'en',
    });
  };
}
