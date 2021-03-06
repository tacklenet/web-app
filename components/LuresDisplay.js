import Link from 'next/link';
import { truncateString } from '../lib/utils';

export default function LuresDisplay({ lure }) {
  return (
    <Link href={`/lure/${lure.id}`}>
      <div
        key={lure.id}
        className='relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black'>
        <div className='flex-shrink-0'>
          <img
            className='h-32 w-32 rounded object-cover'
            src={lure?.image}
            alt={lure?.description && truncateString(lure?.description, 100)}
          />
        </div>{' '}
        <a key={lure.id} href='#' className='focus:outline-none'>
          <div className='flex-1 min-w-0 w-full'>
            <span className='absolute inset-0' aria-hidden='true' />
            {lure?.price && (
              <div className='w-20 text-center md:inline-block items-center px-1.5 py-0.5 rounded-md text-md font-medium bg-gray-100 text-gray-800'>
                ${lure?.price}
              </div>
            )}
            <div className='block md:inline-block overflow-ellipsis  ml-1  text-md font-bold text-gray-900'>
              {lure?.name}
            </div>
            <div className='overflow-ellipsis  text-sm text-gray-500 truncate ml-1 mt-2'>
              <span className='hidden md:inline-block'>Made by</span>{' '}
              {lure?.displayname}
            </div>
            {lure?.type && (
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800'>
                {lure?.type}
              </span>
            )}
          </div>
        </a>
      </div>
    </Link>
  );
}
