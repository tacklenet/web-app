import Link from 'next/link';

const MakersDisplay = () => {
  const array = [1, 2, 3];
  return (
    <>
      <Link href='/maker/bassloverats'>
        <div className='max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-12'>
          <div className='space-y-12'>
            <ul className='mx-auto space-y-16 sm:grid  sm:gap-16 sm:space-y-0 md:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl'>
              {array.map((_) => (
                <li>
                  <div className='space-y-6'>
                    <img
                      className='cursor-pointer shadow-2xl mx-auto h-48 w-48 rounded-full  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                      src='/bassloverats.png'
                      alt
                    />
                    <div className='space-y-2'>
                      <div className='text-lg leading-6 font-medium space-y-1'>
                        <h3 className='font-semibold'>Bass Love Rats</h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};
export default MakersDisplay;
