import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { PropTypes } from 'prop-types';

const FormErrorMessage = ({ errors, name}) => {
  console.log(errors);
  return (
    <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p>{message}</p>}
      />
  );
};

FormErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default FormErrorMessage;
