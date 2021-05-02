import intlConfig from '../config/intl';

export const getLocaleMsg = (id, values = {}) => intlConfig.formatMessage({ id }, values)