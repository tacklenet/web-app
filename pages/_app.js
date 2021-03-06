import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || ((children) => <>{children}</>);

  return (
    <Layout>
      <Component {...pageProps}></Component> <ToastContainer />
    </Layout>
  );
}

export default MyApp;
