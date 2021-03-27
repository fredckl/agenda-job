import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <div className="font-body">
    <div className="max-w-7xl mx-auto">
      <Component {...pageProps} />
    </div>
  </div>;
}

export default MyApp;
