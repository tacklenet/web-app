import Link from 'next/link';

const HeroCard = () => {
  return (
    <>
      <div className='relative'>
        <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
        <div className='mx-auto'>
          <div className='relative shadow-xl sm:overflow-hidden'>
            <div className='absolute inset-0'>
              <img
                className='h-full w-full object-cover'
                src='/topwater.jpg'
                alt='Tackle.net Cover'
              />
              <div
                className='absolute inset-0 bg-gray-600'
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
              <img className='mx-auto w-64 mb-4' src='/logo-full.png' />

              <h1 className='text-center text-xl font-semibold tracking-tight sm:text-3xl'>
                <span className='block text-white'>
                  A fishing tackle network for bait makers.
                </span>
              </h1>

              <div className='mx-auto text-center text-white pt-10 text-lg font-light italic'>
                Do you make baits?
              </div>
              <div className='mt-2 mx-auto sm:flex justify-center'>
                <div className='space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-1 sm:gap-5'>
                  <Link href='/post'>
                    <a className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white hover:text-white hover:bg-black sm:px-8 transition duration-500 ease-in-out'>
                      Showcase your work
                    </a>
                  </Link>
                  <div className='text-sm text-center text-white italic'>
                    See all the benefits below
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroCard;
