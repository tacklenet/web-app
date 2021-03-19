import Image from 'next/image';
import Link from 'next/link';

const HeroCard = () => {
  return (
    <>
      <div className='relative'>
        <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
        <div className='mx-auto'>
          <div className='relative shadow-xl sm:overflow-hidden'>
            <div className='absolute inset-0'>
              <Image
                className='h-full w-full object-cover'
                src='/topwater.jpg'
                alt='Tackle.net Cover'
                layout='fill'
              />

              <div
                className='absolute inset-0 bg-gray-400'
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
              <div className='mx-auto w-64 mb-4'>
                <Image
                  src='/logo-full.png'
                  alt='Tackle.net Logo'
                  width='800'
                  height='213'
                />
              </div>

              <h1 className='text-center text-xl font-semibold tracking-tight sm:text-3xl'>
                <span className='text-white'>A fishing tackle network</span>
              </h1>

              <div className='mt-5 mx-auto sm:flex justify-center'>
                <div className='space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-1 sm:gap-5'>
                  <Link href='/about'>
                    <a className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white hover:text-white hover:bg-black sm:px-8 transition duration-500 ease-in-out'>
                      Learn more
                    </a>
                  </Link>
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
