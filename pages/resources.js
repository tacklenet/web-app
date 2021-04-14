import axios from 'axios';
import Layout from '@/components/Layout';
import MetaTags from '@/components/MetaTags';

const URL = 'https://tacklenet.github.io/resources/';
export async function getStaticProps() {
  const response = await axios
    .get(URL + 'resources.json')
    .catch((error) => console.log(error));

  const resources = response.data;
  return {
    props: { resources },
  };
}

export default function Resources({ resources }) {
  return (
    <>
      <MetaTags
        title='Lure Maker Resources on Tackle.net'
        description='A resource list for lure makers making hard & soft baits.'
      />

      <div className='px-4 pb-12'>
        <div className='mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold leading-tight text-gray-900'>
            Resources
          </h1>
        </div>

        <div className='mt-8 max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px'>
            {resources.resources.map((item) => (
              <div
                key={item.title}
                className='hover:opacity-80 text-center rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black'>
                <div>
                  <span className='rounded-lg inline-flex p-3 bg-teal-50 text-teal-700 ring-4 ring-white'>
                    <img
                      src={URL + item.img}
                      alt={item.title}
                      className='w-64 h-64 object-fit rounded-xl'
                    />
                  </span>
                </div>
                <div className='mt-8'>
                  <h3 className='text-lg font-medium'>
                    <a
                      href={item.url}
                      target='_blank'
                      className='focus:outline-none'>
                      {/* Extend touch target to entire panel */}
                      <span className='absolute inset-0' aria-hidden='true' />
                      {item.title}
                    </a>
                  </h3>
                  <p className='mt-2 text-sm text-gray-500'>
                    {item.description}
                  </p>
                  <div className='mt-2'>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800'>
                      {item.category}
                    </span>
                  </div>
                </div>

                <span
                  className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
                  aria-hidden='true'>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 24 24'>
                    <path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
Resources.layout = Layout;
