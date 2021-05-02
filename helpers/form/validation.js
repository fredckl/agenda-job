import * as EmailValidator from 'email-validator';
import { getLocaleMsg } from '../locale';

export const ruleRequired = {
  required: getLocaleMsg('ruleRequired')
}

export const ruleEmail = {
  validate: v => EmailValidator.validate(v) || getLocaleMsg('ruleEmail')
}

export const ruleMaxLength = max => ({
  maxLength: {
    value: max,
    message: getLocaleMsg(
      'ruleMaxLength',
      { max }
    )
  }
});

export const ruleMinLength = min => ({
  minLength: {
    value: min,
    message: getLocaleMsg(
      'ruleMinLength',
      { min }
    )
  }
})