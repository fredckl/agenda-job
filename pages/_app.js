import '../styles/globals.css';
import PropTypes from 'prop-types';
import SwitchLayout from '../layouts';

function MyApp({ Component, pageProps, router }) {
  return <SwitchLayout router={router}>
    <Component {...pageProps} />
  </SwitchLayout>;
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
  router: PropTypes.object
};

export default MyApp;
