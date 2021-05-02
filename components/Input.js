import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { FormErrorMessage } from '.';

const Input = forwardRef(({
  contrainerClassName,
  inputClassName,
  label,
  value,
  name,
  type,
  errors,
  onChange,
  ...restProps
}, ref) => {
  const contrainerClassnames = classNames('block', contrainerClassName);
  const inputClassnames = classNames('input-text', inputClassName);
  return (
    <div className={contrainerClassnames}>
      <label htmlFor={`input-${name}`}>{label}</label>
      <div>
        <input
          ref={ref}
          className={inputClassnames}
          type={type}
          value={value || ''}
          onChange={e => onChange(e.target.value)}
          {...restProps} />
        {errors && (
          <FormErrorMessage errors={errors} name={name} />
        )}
      </div>
    </div>
  );
});
Input.displayName = 'InputText';

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  contrainerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  errors: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired
};

export default Input;
