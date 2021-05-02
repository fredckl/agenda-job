import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { FormErrorMessage } from '.';

const InputText = forwardRef(({
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
  console.log('errors', errors);
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
            <FormErrorMessage errors={errors} name={name}/>
          )}
      </div>
    </div>
  );
});
InputText.displayName = 'InputText';

InputText.defaultProps = {
  type: 'text',
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  contrainerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired
};

export default InputText;
