import { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '../lib/context';

import Layout from '../components/Layout';
import MetaTags from '../components/MetaTags';
import InviteInput from '../components/InviteInput';
import Logout from '../components/Logout';

export default function Tools() {
  const { username, loading } = useContext(UserContext);

  return (
    <>
      <MetaTags title='Maker Tools on Tackle.net' />

      <div className='px-4 lg:px-12 max-w-7xl mx-auto'>
        <div className='mt-12'>
          <h1 className='text-3xl font-bold leading-tight text-gray-900'>
            Maker Tools
          </h1>
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
                          <span className='ml-2'>
                            My Profile
                            <span className='ml-2 text-gray-500 text-sm font-normal'>
                              {`tackle.net/${username}`}
                            </span>
                          </span>
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
                          📨 <span className='ml-2'>Invite a Maker</span>
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
