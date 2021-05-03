import * as EmailValidator from 'email-validator';
import { i18n } from '../../config';

export const ruleRequired = {
  required: i18n.t('ruleRequired')
}

export const ruleEmail = {
  validate: v => EmailValidator.validate(v) || i18n.t('ruleEmail')
}

export const ruleMaxLength = max => ({
  maxLength: {
    value: max,
    message: i18n.t(
      'ruleMaxLength',
      { max }
    )
  }
});

export const ruleMinLength = min => ({
  minLength: {
    value: min,
    message: i18n.t(
      'ruleMinLength',
      { min }
    )
  }
})