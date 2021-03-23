import { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '../lib/context';

import Layout from '../components/Layout';
import MetaTags from '../components/MetaTags';
import InviteInput from '../components/InviteInput';
import Logout from '../components/Logout';

export default function Tools() {
  const { username, loading, maker } = useContext(UserContext);

  return (
    <>
      <MetaTags title='Maker Tools on Tackle.net' />

      <div className='px-4 lg:px-12 max-w-7xl mx-auto'>
        <div className='mt-12'>
          {maker ? (
            <>
              <img
                className='mb-5 h-36 w-36 shadow-xl rounded-full mx-auto'
                src={maker?.avatar}
              />
              <h1 className='text-2xl text-center font-bold leading-tight text-gray-900'>
                {maker?.displayname}
              </h1>
              <h3 className='select-all ml-2 text-gray-500 text-sm font-normal text-center'>
                {`https://tackle.net/${username}`}
              </h3>
            </>
          ) : (
            <div className='mx-auto loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-36 w-36 mb-5'></div>
          )}
        </div>

        {!loading &&
          username !== null &&
          (username == null ? (
            <InviteInput />
          ) : (
            <main className='mt-5 mb-12'>
              <div className='bg-white shadow overflow-hidden sm:rounded-md'>
                <ul className='divide-y divide-gray-200'>
                  <Link href={`/${username}`}>
                    <a className='block hover:bg-gray-50'>
                      <li className='px-4 py-4 sm:px-6'>
                        <div className='text-md font-bold text-gray-900'>
                          👤
                          <span className='ml-2'>My Profile</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                  <Link href='/post'>
                    <a className='block hover:bg-gray-50'>
                      <li className='px-4 py-4 sm:px-6'>
                        <div className='text-md font-bold text-gray-900'>
                          ✏️ <span className='ml-2'>Post Tackle</span>{' '}
                        </div>
                      </li>
                    </a>
                  </Link>
                  <Link href='/addlinks'>
                    <a className='block hover:bg-gray-50'>
                      <li className='px-4 py-4 sm:px-6'>
                        <div className='text-md font-bold text-gray-900'>
                          🔗 <span className='ml-2'>Profile Links</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                  <Link href='/resources'>
                    <a className='block hover:bg-gray-50'>
                      <li className='px-4 py-4 sm:px-6'>
                        <div className='text-md font-bold text-gray-900'>
                          📖 <span className='ml-2'>Resources</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                  <Link href='/invite'>
                    <a className='block hover:bg-gray-50'>
                      <li className='px-4 py-4 sm:px-6'>
                        <div className='text-md font-bold text-gray-900'>
                          📨 <span className='ml-2'>Invite</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                  <Link href='/settings'>
                    <a className='block hover:bg-gray-50'>
                      <li className='px-4 py-4 sm:px-6'>
                        <div className='text-md font-bold text-gray-900'>
                          ⚙️ <span className='ml-2'>Settings</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                </ul>
              </div>
              <Logout />
            </main>
          ))}
      </div>
    </>
  );
}
Tools.layout = Layout;
