import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Magic } from 'magic-sdk';
import { toast } from 'react-toastify';
import { toastConfig } from '@/lib/utils';
import firebase from '@/lib/firebase';

import Layout from '@/components/Layout';
import MetaTags from '@/components/MetaTags';

const validEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validEmail(email)) {
      toast.error('Enter a valid Email', toastConfig);
      setEmail('');
      return;
    }

    setSubmitted(true);
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY);
    const didToken = await magic.auth.loginWithMagicLink({ email });

    const auth = firebase.functions().httpsCallable('auth');
    /* DID token is passed into the auth callable function */
    let result = (await auth({ didToken })).data;
    /* Firebase user access token is used to authenticate */
    await firebase.auth().signInWithCustomToken(result.token);

    router.push('/tools');
  };

  return (
    <>
      <MetaTags title='Login to Tackle.net' />

      <div className='px-4 lg:px-12 max-w-7xl mx-auto'>
        <div className='mt-12'>
          <h1 className='text-3xl font-bold leading-tight text-gray-900'>
            Maker Login
          </h1>
        </div>
        <div className='rounded-md pt-2 pb-2 mt-2'>
          <div className='flex'>
            <div className='flex-shrink-0'>
              <svg
                className='h-5 w-5 text-black'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'>
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='ml-3 flex-1 md:flex md:justify-between'>
              <p className='text-sm text-black'>
                Invite only. Contact a{' '}
                <Link href='/makers'>
                  <span className='underline cursor-pointer'>maker</span>
                </Link>{' '}
                for an invite.
              </p>
              <p className='mt-3 text-sm md:mt-0 md:ml-6'>
                <Link href='/'>
                  <a className='whitespace-nowrap font-medium text-black hover:text-blue-600'>
                    Go Home <span aria-hidden='true'>→</span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <main className='mt-5'>
          <div className='px-4 py-4 mb-12 bg-white rounded-lg'>
            <div>
              <form onSubmit={handleSubmit}>
                <div className='mt-1'>
                  <label
                    htmlFor='title'
                    className='block text-lg font-medium text-gray-700'>
                    Email
                  </label>

                  <input
                    type='email'
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    name='email'
                    id='email'
                    className='mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-500 rounded-md'
                  />
                </div>

                {email && !submitted ? (
                  <button
                    type='submit'
                    className='mx-auto mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
                    Send Login Link
                  </button>
                ) : (
                  submitted && (
                    <button
                      disabled
                      type='submit'
                      className='mx-auto mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      Please wait...
                    </button>
                  )
                )}
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
Login.layout = Layout;
