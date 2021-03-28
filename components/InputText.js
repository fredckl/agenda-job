import classNames from 'classnames';
import PropTypes from 'prop-types';

const InputText = ({ className, label}) => {
  const labelClassnames = classNames('block', className);
  return (
    <label className={labelClassnames}>
      <span className="block text-gray-700 uppercase">{label}</span>
      <input className="rounded bg-gray-200 focus:bg-white border-transparent w-full focus:border-gray-500 focus:ring-0 block" type="text"/>
    </label>
  );
};
InputText.propTypes = {
  label: PropTypes.string.isRequired
};

export default InputText;
