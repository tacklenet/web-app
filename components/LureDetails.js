export default function LureDetails() {
  return (
    <>
      <div className='w-100'>
        <img className='object-cover overflow-hide rounded-md' src='/opm.jpg' />
      </div>
      <div className='flex-1 min-w-0 mt-3'>
        <p className='inline-flex items-center px-1.5 py-0.5 rounded-md text-lg font-medium bg-gray-100 text-gray-800'>
          $85
        </p>
        <p className='ml-1 inline text-lg font-bold text-gray-900'>Mischief</p>
        <p className='text-sm text-gray-500 ml-2 mt-2'>
          noun. Definition of bait (Entry 2 of 2) 1a : something (such as food)
          used in luring especially to a hook or trap using worms for bait. b :
          a poisonous material placed where it will be eaten by harmful or
          objectionable animals. 2 : lure, temptation using bargains as bait for
          shoppers.
        </p>
        <div className='mt-4 space-x-2'>
          <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800'>
            Topwater
          </span>
          <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800'>
            Wake
          </span>
          <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800'>
            Hardbait
          </span>
        </div>

        <p className='text-sm text-gray-500 ml-2 mt-5'>
          Released on Jan 15, 2020
        </p>
        <div className='text-sm text-gray-900 ml-2 mt-5'>
          <a href='/maker/bassloverats'>
            <img
              src='/bassloverats.png'
              className='w-14 rounded-full shadow-md inline-block mr-2'
            />
            Bass Love Rats
          </a>
        </div>
      </div>
    </>
  );
}
