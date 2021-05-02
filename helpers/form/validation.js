import * as EmailValidator from 'email-validator';

export const ruleRequired = {
  required: 'Ce champ est obligatoire'
}

export const ruleEmail = {
  validate: v => EmailValidator.validate(v) || 'Adresse e-mail non valide'
}

export const ruleMaxLength = max => ({
  maxLength: {
    value: max,
    message: `${max} caractères maximum sont autorisé`
  }
});

export const ruleMinLength = min => ({
  minLength: {
    value: min,
    message: `${min} caractères minimum sont requis`
  }
})