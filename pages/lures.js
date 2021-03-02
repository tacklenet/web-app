import { firestore, postToJSON } from '../lib/firebase';
import Layout from '../components/Layout';
import LuresDisplay from '../components/LuresDisplay';
import MetaTags from '../components/MetaTags';

export async function getStaticProps() {
  const luresQuery = await firestore
    .collection('lures')
    .orderBy('timestamp', 'desc')
    .get();
  const lures = luresQuery.docs.map(postToJSON);

  return {
    props: { lures },
    revalidate: 5000,
  };
}

export default function Lures({ lures }) {
  return (
    <>
      <MetaTags
        title='Lures on Tackle.net'
        description='Disover unique, handmade bass lures made my local bait makers.'
      />

      <Layout>
        <div className='px-4 pb-24'>
          <div className='mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold leading-tight text-gray-900'>
              Lures
            </h1>
          </div>

          <main>
            <div className='pt-6 max-w-7xl mx-auto sm:px-6 lg:px-8'>
              <div className='mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {lures.map((lure) => (
                  <LuresDisplay lure={lure} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}
