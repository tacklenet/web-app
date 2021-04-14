import Link from 'next/link';

import Layout from '@/components/Layout';
import MetaTags from '@/components/MetaTags';

export default function Custom404() {
  return (
    <>
      <MetaTags title='Page not found' />

      <div className='px-4 lg:px-12 max-w-7xl mx-auto'>
        <div className='mt-12 text-center'>
          <h1 className='text-4xl font-bold mb-2'>🤫 Oops@.</h1>
          <iframe
            className='mx-auto'
            src='https://giphy.com/embed/l2JehQ2GitHGdVG9y'
            width='480'
            height='362'
            frameBorder='0'
            allowFullScreen></iframe>
          <Link href='/'>
            <button className='mx-auto mt-4 w-1/3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
              Go home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
Custom404.layout = Layout;
