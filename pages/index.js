import { firestore, postToJSON } from '../lib/firebase';

import Layout from '../components/Layout';
import HeroCard from '../components/HeroCard';
import MetaTags from '../components/MetaTags';
import MakersDisplay from '../components/MakersDisplay';

export async function getStaticProps() {
  const makersQuery = await firestore
    .collection('makers')
    .orderBy('timestamp', 'desc')
    .limit(12)
    .get();
  const makers = makersQuery.docs.map(postToJSON);

  return {
    props: { makers },
    revalidate: 100,
  };
}

export default function Home({ makers }) {
  return (
    <>
      <MetaTags />
      <HeroCard />

      <div className='px-4 pb-12'>
        <div className='mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold leading-tight text-gray-900'>
            Makers
          </h1>
        </div>

        <main>
          <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
            <MakersDisplay makers={makers} key={makers.username} />
          </div>
        </main>
      </div>
    </>
  );
}

Home.layout = Layout;
