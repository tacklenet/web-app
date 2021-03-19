import { useState, useContext } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { toastConfig } from '../lib/utils';
import { UserContext } from '../lib/context';
import { firestore } from '../lib/firebase';

export default function InviteInput() {
  const [invitecode, setInviteCode] = useState('');
  const { user, username } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const ref = firestore.doc(`invites/${invitecode}`);
    const { exists } = await ref.get();

    if (exists) {
      const data = await ref.get();
      const inviteData = data.data();
      const postRef = firestore.collection('users').doc(user.uid);

      const postData = {
        username: inviteData.guest,
        referral: inviteData.member,
        invitecode: inviteData.code,
      };

      await postRef.set(postData);
      toast.success('Welcome ' + `${inviteData.guest}` + ' 👋', toastConfig);
    } else {
      toast.error('Invalid invite code', toastConfig);
    }
  };

  return (
    <>
      <div className='px-4 py-4 mt-5 mb-12 bg-white rounded-lg'>
        <div>
          <form onSubmit={handleSubmit}>
            <div className='mt-1'>
              <label
                htmlFor='title'
                className='block text-lg font-medium text-gray-700'>
                Enter Invite Code
                <span className='ml-2 text-sm font-normal text-gray-500'>
                  Don't have one? Ask a{' '}
                  <Link href='/makers'>
                    <span className='cursor-pointer hover:underline'>
                      maker
                    </span>
                  </Link>
                </span>
              </label>

              <input
                type='text'
                value={invitecode}
                onChange={({ target }) => setInviteCode(target.value)}
                name='invitecode'
                id='invitecode'
                className='mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-500 rounded-md'
              />
            </div>

            {invitecode ? (
              <button
                type='submit'
                className='mx-auto mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
                Continue
              </button>
            ) : (
              <button
                disabled
                type='submit'
                className='mx-auto mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                Continue
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
