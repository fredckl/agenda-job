import classNames from 'classnames';
import PropTypes from 'prop-types';

const InputText = ({ className, label, inputProps}) => {
  const labelClassnames = classNames('block', className);
  return (
    <label className={labelClassnames}>
      <span className="block text-gray-700 uppercase">{label}</span>
      <input className="input-text" type="text" {...inputProps}/>
    </label>
  );
};

InputText.defaultProps = {
  inputProps: {}
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  inputProps: PropTypes.object
};

export default InputText;
