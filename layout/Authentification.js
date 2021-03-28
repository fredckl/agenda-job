import useHtmlClassBody from '../hooks/useHtmlClassBody';

/**
 * LAyout for authentification
 * @param {*} param0
 * @returns
 */
const Authentification = ({children}) => {
  useHtmlClassBody('auth');

  return (
    <div className="login">
      {children}
    </div>
  );
};

export default Authentification;
