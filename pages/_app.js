import '../styles/globals.css';
import PropTypes from 'prop-types';
import SwitchLayout from '../layouts';
import { i18n } from '../config'
import { I18nextProvider } from 'react-i18next';
function MyApp({ Component, pageProps, router }) {
  return (
    <I18nextProvider i18n={i18n}>
      <SwitchLayout router={router}>
        <Component {...pageProps} />
      </SwitchLayout>
    </I18nextProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
  router: PropTypes.object
};

export default MyApp;
