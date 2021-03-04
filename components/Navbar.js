import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <nav className='bg-white shadow'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex px-2 lg:px-0 mt-2 mb-2'>
              <div className='flex-shrink-0 flex items-center'>
                <Link href='/'>
                  <a>
                    <img
                      className='block lg:hidden h-8 w-auto'
                      src='/logo-square.svg'
                      alt='Workflow'
                    />
                    <img
                      className='hidden lg:block h-8 w-auto'
                      src='/tackle-logo.svg'
                      alt='Workflow'
                    />
                  </a>
                </Link>
              </div>
              <div className='ml-10 flex space-x-8'>
                <Link href='/makers'>
                  <a className='border-transparent text-gray-900  hover:border-gray-300 hover:text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                    Makers
                  </a>
                </Link>
                <Link href='/lures'>
                  <a
                    href='#'
                    className='border-transparent text-gray-900 hover:border-gray-300 hover:text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                    Lures
                  </a>
                </Link>
              </div>
            </div>
            <>
              <Link href='/post'>
                <a className='mt-2 mb-2 ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
                  Post Lure
                </a>
              </Link>
            </>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
