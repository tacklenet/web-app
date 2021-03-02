import { firestore, postToJSON } from '../lib/firebase';

import Layout from '../components/Layout';
import MakersDisplay from '../components/MakersDisplay';
import MetaTags from '../components/MetaTags';

export async function getStaticProps() {
  const makersQuery = await firestore
    .collection('users')
    .orderBy('timestamp', 'desc')
    .get();
  const makers = makersQuery.docs.map(postToJSON);

  return {
    props: { makers },
    revalidate: 5000,
  };
}

export default function Makers({ makers }) {
  return (
    <>
      <MetaTags
        title='Lure Makers on Tackle.net'
        description='Explore handmade bait makers and the latest bass lures to help you catch more fish'
      />

      <Layout>
        <div className='px-4 pb-12'>
          <div className='mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold leading-tight text-gray-900'>
              Makers
            </h1>
          </div>

          <main>
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
              <MakersDisplay makers={makers} />
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}
