import Link from 'next/link';
import { timeDisplay } from '../lib/utils';

export default function LureDetails({ lure }) {
  return (
    <>
      <img
        className='w-full object-cover overflow-hide rounded-md'
        src={lure?.image}
      />
      <div className='flex-1 min-w-0 mt-3'>
        {lure?.price && (
          <p className='inline-flex items-center px-1.5 py-0.5 rounded-md text-lg font-medium bg-gray-100 text-gray-800'>
            ${lure?.price}
          </p>
        )}
        <p className='ml-2 inline text-lg font-bold text-gray-900'>
          {lure?.name}
        </p>
        <p className='whitespace-pre-line text-sm text-gray-500 ml-2 mt-2'>
          {lure?.description}
        </p>
        <div className='mt-4 space-x-2'>
          <a href={`https://instagram.com/${lure?.username}`} target='_blank'>
            <button
              type='button'
              className='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
              <svg
                className='-ml-1 mr-2 h-5 w-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'>
                <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
                <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
              </svg>
              DM for Details
            </button>
          </a>
        </div>
        <div className='mt-6 space-x-2'>
          <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800'>
            {lure?.category}
          </span>
          <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800'>
            {lure?.subcategory}
          </span>
        </div>

        <div className='text-sm text-gray-500 ml-2 mt-4'>
          <div className='inline-block align-middle	'>
            Posted on {timeDisplay(lure?.created)}
          </div>
          <a href={`https://instagram.com/p/${lure?.id}`} target='_blank'>
            <div className='outline-none inline-block align-middle	 hover:text-gray-600 my-auto'>
              <svg
                className='h-4 w-6 ml-1'
                fill='currentColor'
                viewBox='2 2 20 20'
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
        <div className='text-sm text-gray-900 ml-2 mt-5'>
          <Link href={`/${lure?.username}`}>
            <a>
              <img
                src={lure?.avatar}
                className='w-14 rounded-full shadow-md inline-block mr-2'
              />
              <span className='text-md font-semibold text-gray-700 hover:underline'>
                {lure?.displayname}
              </span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
