import Head from 'next/head';
import Layout from '../../components/Layout';
import LuresDisplay from '../../components/LuresDisplay';
import MetaTags from '../../components/MetaTags';

export default function Home() {
  const array = [1, 2, 3, 4];
  return (
    <>
      <Head>
        <title>Tackle.net - Fishing Tackle Network</title>
      </Head>

      <Layout>
        <article>
          {/* Profile header */}
          <div>
            <div>
              <img
                className='h-32 w-full object-cover lg:h-64'
                src='/baits.png'
                alt
              />
            </div>
            <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
                <div className='flex'>
                  <img
                    className='h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32'
                    src='/bassloverats.png'
                    alt
                  />
                </div>
                <div className='mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
                  <div className='sm:hidden 2xl:block mt-6 min-w-0 flex-1'>
                    <h1 className='inline-block text-2xl font-bold text-gray-900 truncate'>
                      Bass Love Rats
                    </h1>
                    <a
                      href='https://instagram.com/bassloverats'
                      target='_blank'>
                      <div className='inline-block pb-1 hover:text-gray-600'>
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
                  </div>
                  <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
                      <span className='ml-2 mt-0.5'>DM to Order</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className='hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1'>
                <h1 className='inline-block text-2xl font-bold text-gray-900 truncate'>
                  Bass Love Rats
                </h1>
                <a href='https://instagram.com/bassloverats' target='_blank'>
                  <div className='inline-block pb-1 hover:text-gray-600'>
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
              </div>
            </div>
          </div>

          {/* Description list */}
          <div className='mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
            <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
              <div className='sm:col-span-1'>
                <dt className='text-sm font-medium text-gray-500'>Location</dt>
                <dd className='mt-1 text-sm text-gray-900'>Washington 🇺🇸</dd>
              </div>
              <div className='sm:col-span-1'>
                <dt className='text-sm font-medium text-gray-500'>
                  Making lures since
                </dt>
                <dd className='mt-1 text-sm text-gray-900'>2020</dd>
              </div>

              <div className='sm:col-span-2'>
                <dt className='text-sm font-medium text-gray-500'>About</dt>
                <dd className='mt-1 max-w-prose text-sm text-gray-900'>
                  <p>
                    Bass have an insatiable appetite for rodents and when they
                    strike it's an unforgettable experience. My goal is to
                    create lures that will help you maximize your fun on the
                    water & catch your PB. Tight lines!
                  </p>
                </dd>
              </div>
            </dl>
          </div>
          {/* Lures list */}
          <div className='mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8'>
            <h2 className='text-sm font-medium text-gray-500'>Lures</h2>
            <div className='mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2'>
              {array.map((number) => (
                <LuresDisplay key={number} displayModal={true} />
              ))}
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
}
