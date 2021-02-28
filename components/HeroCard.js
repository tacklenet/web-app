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
                src='/underwater.jpg'
                alt='Tackle.net Cover'
              />
              <div
                className='absolute inset-0 bg-gray-500'
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
              <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                <span className='block text-white'>Better Baits </span>
                <span className='block text-white'>Better Fishing</span>
              </h1>
              <div className='mt-2 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl'>
                Tackle.net is an exclusive network for bait makers.{' '}
              </div>
              <div className='mx-auto text-center text-white pt-10 text-lg font-light italic'>
                Are you a bait maker?
              </div>

              <div className='mt-2 mx-auto sm:flex justify-center'>
                <div className='space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-1 sm:gap-5'>
                  <a
                    href='#'
                    className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white hover:bg-black hover:text-white sm:px-8 transition duration-500 ease-in-out'>
                    Get started
                  </a>
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