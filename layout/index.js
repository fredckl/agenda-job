import Customer from './Customer';
import Authentification from './Authentification';
import PropTypes from 'prop-types';

const SwitchLayout = ({router, children}) => {

  if (router.pathname.startsWith('/login')) {
    return <Authentification>{children}</Authentification>;
  }

  return (
    <Customer>
      {children}
    </Customer>
  );
};

SwitchLayout.propTypes = {
  router: PropTypes.object.isRequired
};



export default SwitchLayout;