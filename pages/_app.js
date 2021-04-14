import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { UserContext } from '@/lib/context';
import { useUserData } from '@/lib/hooks';

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || ((children) => <>{children}</>);
  const userData = useUserData();

  return (
    <>
      <UserContext.Provider value={userData}>
        <Layout>
          <Component {...pageProps}></Component>
          <ToastContainer />
        </Layout>
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
