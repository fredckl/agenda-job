import PropTypes from 'prop-types';
const Button = ({ label, htmlType, ...restProps }) => {
  return (
    <button
      className="bg-gray-200 text-bg-500 py-1 px-2 focus:ring-0 rounded uppercase hover:bg-gray-200 hover:text-gray-500"
      html-type={htmlType}
      {...restProps}
    >{label}</button>
  );
};

Button.defaultProps = {
  htmlType: 'submit'
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  htmlType: PropTypes.string
};
export default Button;
