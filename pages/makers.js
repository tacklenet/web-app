import Head from 'next/head';
import Layout from '../components/Layout';
import MakersDisplay from '../components/MakersDisplay';

export default function Makers() {
  return (
    <>
      <Head>
        <title>Tackle.net - Fishing Tackle Network</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <div className='pl-4 pb-12'>
          <div className='mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold leading-tight text-gray-900'>
              Makers
            </h1>
          </div>

          <main>
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
              <MakersDisplay />
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}
