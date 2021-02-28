import Head from 'next/head';
import Layout from '../../components/Layout';

import LureDetails from '../../components/LureDetails';

export default function Home() {
  const array = [1, 2, 3, 4];
  return (
    <>
      <Head>
        <title>Tackle.net - Fishing Tackle Network</title>
      </Head>

      <Layout>
        <div className='bg-white overflow-hidden shadow rounded-lg my-12 mx-auto max-w-4xl px-2'>
          <div className='px-4 py-5 sm:p-6'>
            <LureDetails />
          </div>
        </div>
      </Layout>
    </>
  );
}
