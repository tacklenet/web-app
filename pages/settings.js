import { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '@/lib/context';

import Layout from '@/components/Layout';
import MetaTags from '@/components/MetaTags';

import en from 'relative-time-format/locale/en.json';
import TimeAgo from 'javascript-time-ago';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

export default function Settings() {
  const { username, user, referral, maker } = useContext(UserContext);

  console.log(maker);
  return (
    <>
      <MetaTags title='Maker Settings on Tackle.net' />

      <div className='px-4 lg:px-12 max-w-7xl mx-auto'>
        <div className='mt-12'>
          <h1 className='text-3xl font-bold leading-tight text-gray-900'>
            Settings
          </h1>
        </div>

        <main className='mt-5 mb-12'>
          <div className='bg-white shadow overflow-hidden sm:rounded-md'>
            <ul className='divide-y divide-gray-200'>
              <Link href={`/${username}`}>
                <a className='block hover:bg-gray-50'>
                  <li className='px-4 py-4 sm:px-6'>
                    <div className='text-md  text-gray-900'>
                      <span className='mr-2 font-bold'>Username</span>
                      <span className='font-normal'>{username}</span>
                    </div>
                  </li>
                </a>
              </Link>

              <li className='px-4 py-4 sm:px-6'>
                <div className='text-md font-bold text-gray-900'>
                  <span className='mr-2 font-bold'>Email</span>
                  <span className='font-normal'>{user?.email}</span>
                </div>
              </li>

              <li className='px-4 py-4 sm:px-6'>
                <div className='text-md font-bold text-gray-900'>
                  <span className='mr-2 font-bold'>UID</span>
                  <span className='font-normal'>{user?.uid}</span>
                </div>
              </li>
              <Link href={`/${referral}`}>
                <a className='block hover:bg-gray-50'>
                  <li className='px-4 py-4 sm:px-6 '>
                    <div className='text-md font-bold text-gray-900'>
                      <span className='mr-2 font-bold'>Referred by</span>
                      <span className='font-normal'>{referral}</span>
                    </div>
                  </li>
                </a>
              </Link>

              <li className='px-4 py-4 sm:px-6'>
                <div className='text-md font-bold text-gray-900'>
                  <span className='mr-2 font-bold'>Joined</span>
                  <span className='font-normal'>
                    {maker &&
                      timeAgo.format(
                        new Date(maker?.timestamp) - 24 * 60 * 60 * 1000
                      )}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}
Settings.layout = Layout;
