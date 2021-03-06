import MetaTags from '@/components/MetaTags';
import Layout from '@/components/Layout';
import LuresDisplay from '@/components/LuresDisplay';
import LinkDisplay from '@/components/LinkDisplay';
import { truncateString } from '@/lib/utils';

import { getUserWithUsername, firestore, postToJSON } from '@/lib/firebase';

export async function getStaticProps({ params }) {
  const { username } = params;

  const user = await getUserWithUsername(username);

  const luresQuery = await firestore
    .collection('lures')
    .orderBy('timestamp', 'desc')
    .where('username', '==', username)
    .get();
  const lures = luresQuery.docs.map(postToJSON);

  return {
    props: { user, lures },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const snapshot = await firestore.collection('makers').get();

  const paths = snapshot.docs.map((doc) => {
    const { username } = doc.data();
    return {
      params: { username },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export default function Maker({ user, lures }) {
  const random = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };
  const bg = lures.length == 0 ? user.avatar : random(lures).image;

  return (
    <>
      <MetaTags
        title={`${user.displayname} on Tackle.net`}
        description={truncateString(user.bio, 160)}
        image={user.avatar}
      />

      <div>
        <img
          className='h-32 lg:h-64 w-full object-cover'
          src={bg}
          alt={`${user.displayname} Background Image on Tackle.net`}
        />
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className=''>
            <ul className=''>
              <li className='px-6 py-4'>
                <img
                  className='mx-auto -mt-16 h-24 w-24 sm:h-36 sm:w-36 sm:-mt-20 rounded-full ring-4 ring-white '
                  src={user.avatar}
                  alt='avatar'
                />
              </li>
              <li className='px-6 py-1 text-center'>
                <h1 className='align-middle inline-block text-2xl font-bold text-gray-900 truncate'>
                  {user.displayname}
                </h1>
                <a
                  href={`https://instagram.com/${user.username}`}
                  target='_blank'>
                  <div className='inline-block align-middle hover:text-gray-600'>
                    <svg
                      className='h-6 w-6 ml-1'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'>
                      <path
                        fillRule='evenodd'
                        d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </a>
              </li>
              <li className='px-6 py-1 text-center'>
                <dd className='mt-1 max-w-prose text-sm text-gray-900 mx-auto'>
                  {user.bio}
                  <div className='mt-1 font-medium text-gray-500'>
                    {' ' + user.followers} IG followers
                  </div>
                </dd>
              </li>

              {user.links && user.links.length != 0
                ? user.links.map((link, index) => (
                    <li key={index} className='px-6 -mt-3'>
                      <LinkDisplay
                        title={link.title}
                        url={link.url}
                        logo={link.logo}
                      />
                    </li>
                  ))
                : user.externalurl && (
                    <li className='px-6 -mt-3'>
                      <LinkDisplay
                        title='Website'
                        url={user.externalurl}
                        logo='/link.png'
                      />
                    </li>
                  )}
            </ul>
          </div>
        </div>
      </div>

      {/* Lures list */}
      {lures.length > 0 && (
        <div className='mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8'>
          <h2 className='text-sm font-medium text-gray-500'>
            {lures.length} Items
          </h2>
          <div className='mt-1 grid grid-cols-1 gap-4 md:grid-cols-2'>
            {lures.map((lure) => (
              <LuresDisplay key={lure.id} lure={lure} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
Maker.layout = Layout;
