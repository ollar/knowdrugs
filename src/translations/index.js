import I18n from 'react-native-i18n';

import en from './locale/en';
import ru from './locale/ru';

I18n.fallbacks = true;
I18n.translations = {
  en,
  ru,
};

export default I18n;
