import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { PropTypes } from 'prop-types';

const Message = ({ message }) => <p className="text-sm text-red-500">{message}</p>;

const FormErrorMessage = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={Message}
    />
  );
};

FormErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default FormErrorMessage;
