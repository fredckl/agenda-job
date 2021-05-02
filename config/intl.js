import { createIntl, createIntlCache } from 'react-intl';
import localeFr from '../locales/fr-FR';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'fr-FR',
  messages: localeFr
}, cache);

export default intl;