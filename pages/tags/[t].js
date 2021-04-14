import { firestore, postToJSON } from '@/lib/firebase';
import Layout from '@/components/Layout';
import LuresDisplay from '@/components/LuresDisplay';
import MetaTags from '@/components/MetaTags';
import { categories, isMain, textHumanize, textToUrl } from '@/lib/utils';

export async function getStaticProps({ params }) {
  const { t } = params;

  const tag = textHumanize(t);

  const luresQuery = await firestore
    .collection('lures')
    .where(isMain(tag) ? 'category' : 'subcategory', '==', tag)
    .orderBy('timestamp', 'desc')
    .get();
  const lures = luresQuery.docs.map(postToJSON);

  return {
    props: { tag, lures },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  let tags = [];

  for (const category of categories) {
    tags.push(category.main);
    tags = [...tags, ...category.sub];
  }

  const paths = tags.map((tag) => ({
    params: { t: textToUrl(tag) },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export default function Lures({ tag, lures }) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <MetaTags
        title={`${tag} Lures & Tackle on Tackle.net`}
        description={`Explore ${tag} bass lures and tackle handmade by local bait makers.`}
      />

      <div className='px-4 pb-24'>
        <div className='mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='align-middle inline-block text-3xl font-bold leading-tight text-gray-900'>
            {tag}
          </h1>
        </div>

        <main>
          <div className='pt-6 max-w-7xl mx-auto sm:px-6 lg:px-8'>
            <div className='mt-1 grid grid-cols-1 gap-4 md:grid-cols-2'>
              {lures.map((lure) => (
                <LuresDisplay key={lure.id} lure={lure} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
Lures.layout = Layout;
