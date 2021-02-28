import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
  <>
    <Head>
      <title>Tackle.net - Fishing Tackle Network</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div className='bg-gray-100 flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow mx-auto w-full'>{props.children}</div>
      <Footer />
    </div>
  </>
);

export default Layout;
