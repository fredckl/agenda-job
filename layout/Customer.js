import useHtmlClassBody from '../hooks/useHtmlClassBody';

/**
 * Layout for Customers
 * @param {*} param0
 * @returns
 */
const Customer = ({children}) => {
  useHtmlClassBody('customer');

  return (
    <div className="max-w-7xl mx-auto font-body">
      {children}
    </div>
  );
};

export default Customer;
