import Head from 'next/head';
import PropTypes from 'prop-types';

const AppHead = ({ title, description, keywords }) => (
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>{title && `${title} - `} {process.env.NEXT_PUBLIC_SITE_NAME}</title>
    <link rel="icon" href="/favicon.ico" />
    {description && <meta name="descrition" content={description}/>}
    {keywords && <meta name="keywords" content={keywords}/>}
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Nunito:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap" rel="stylesheet"/>
  </Head>
);

AppHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string
};

export default AppHead;