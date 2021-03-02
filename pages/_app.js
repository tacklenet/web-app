import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} /> <ToastContainer />
    </>
  );
}

export default MyApp;
