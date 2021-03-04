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
    revalidate: 60,
  };
}

export default function Lures({ lures }) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <MetaTags
        title='Lures on Tackle.net'
        description='Disover unique, handmade bass lures made my local bait makers.'
      />

      <Layout>
        <div className='px-4 pb-24'>
          <div className='mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='align-middle inline-block text-3xl font-bold leading-tight text-gray-900'>
              Lures
            </h1>
            <div
              onClick={handleRefresh}
              className='align-middle ml-3 cursor-pointer inline-block text-sm  hover:text-gray-700 hover:no-underline'>
              <span className='no-underline'>🔄</span>
              <span className='ml-1 hover:underline no-underline'>Refresh</span>
            </div>
          </div>

          <main>
            <div className='pt-6 max-w-7xl mx-auto sm:px-6 lg:px-8'>
              <div className='mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {lures.map((lure) => (
                  <LuresDisplay key={lure.id} lure={lure} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}
