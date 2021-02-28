import Head from 'next/head';
import Layout from '../components/Layout';
import LuresDisplay from '../components/LuresDisplay';

export default function Makers() {
  const array = [1, 2, 3, 4];

  return (
    <>
      <Head>
        <title>Lures on Tackle.net</title>
      </Head>

      <Layout>
        <div className='pl-4 pb-24'>
          <div className='mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold leading-tight text-gray-900'>
              Lures
            </h1>
          </div>

          <main>
            <div className='pt-6 max-w-7xl mx-auto sm:px-6 lg:px-8'>
              <div className='mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {array.map(() => (
                  <LuresDisplay />
                ))}
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}
