
const Button = ({htmlType, label, onClick}) => {
  return (
    <button
      className="bg-gray-200 text-bg-500 py-1 px-2 focus:ring-0 rounded uppercase hover:bg-gray-200 hover:text-gray-500" html-type={htmlType}
      onClick={onClick}
    >{label}</button>
  );
};

Button.defaultProps = {
  type: 'submit'
};
export default Button;
