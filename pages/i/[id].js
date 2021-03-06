import { firestore, postToJSON } from '@/lib/firebase';

import MetaTags from '@/components/MetaTags';
import Layout from '@/components/Layout';
import LureDetails from '@/components/LureDetails';
import { truncateString } from '@/lib/utils';

export async function getStaticProps({ params }) {
  const { id } = params;
  let lure;
  const docRef = firestore.collection('lures').doc(id);

  const doc = await docRef.get();
  if (!doc.exists) {
    return {
      notFound: true,
    };
  } else {
    lure = postToJSON(doc);

    return {
      props: { lure },
      revalidate: 300,
    };
  }
}

export async function getStaticPaths() {
  const snapshot = await firestore.collection('lures').get();

  const paths = snapshot.docs.map((doc) => {
    const { id } = doc.data();
    return {
      params: { id },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export default function Lure(props) {
  const { lure } = props;

  return (
    <>
      <MetaTags
        title={`${lure?.name} by ${lure?.displayname} on Tackle.net`}
        description={truncateString(lure.description, 160)}
        image={lure.image}
      />
      <div className='bg-white overflow-hidden shadow rounded-lg my-12 mx-auto max-w-2xl '>
        <div className='pb-6'>
          <LureDetails lure={lure} />
        </div>
      </div>
    </>
  );
}
Lure.layout = Layout;
