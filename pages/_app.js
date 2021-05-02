import '../styles/globals.css';
import PropTypes from 'prop-types';
import SwitchLayout from '../layouts';
import { RawIntlProvider } from 'react-intl';
import { intl } from '../config'
function MyApp({ Component, pageProps, router }) {
  return (
    <SwitchLayout router={router}>
      <RawIntlProvider value={intl}>
        <Component {...pageProps} />
      </RawIntlProvider>
    </SwitchLayout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
  router: PropTypes.object
};

export default MyApp;
