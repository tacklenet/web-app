import { useState, useContext } from 'react';
import { firestore } from '../lib/firebase';
import { UserContext } from '../lib/context';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const Wallet = require('ethereumjs-wallet').default;

import Layout from '../components/Layout';
import MetaTags from '../components/MetaTags';

export default function Invite() {
  const { user, username } = useContext(UserContext);

  const [copied, setCopied] = useState('Copy');
  const [igusername, setIgUsername] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const inviteCode = Wallet.generate(true).getAddressString();
    setCode(inviteCode);

    const postRef = firestore.collection('invites').doc(inviteCode);

    const inviteData = {
      code: inviteCode,
      guest: igusername,
      member: username,
    };

    await postRef.set(inviteData);
  };

  return (
    <>
      <MetaTags title='Invite Makers on Tackle.net' />

      <div className='px-4 lg:px-12 max-w-7xl mx-auto'>
        <div className='mt-12'>
          <h1 className='text-3xl font-bold leading-tight text-gray-900'>
            Invite Maker
          </h1>
        </div>
        <div className='px-4 py-4 mt-5 mb-12 bg-white rounded-lg'>
          {!code && (
            <div>
              <form onSubmit={handleSubmit}>
                <div className='mt-1'>
                  <label
                    htmlFor='title'
                    className='block text-lg font-medium text-gray-700'>
                    Enter Maker's Instagram Username
                    <div className='font-light text-xs text-gray-600 pb-2'>
                      Without the @. You are responsible for makers you invite.
                    </div>
                  </label>

                  <input
                    type='text'
                    value={igusername}
                    onChange={({ target }) => {
                      setIgUsername(target.value);
                      setCode('');
                    }}
                    name='igusername'
                    id='igusername'
                    placeholder='Username'
                    className='mt-1 focus:ring-black focus:border-black block w-full shadow-sm border-gray-500 rounded-md'
                  />
                </div>

                {igusername && (
                  <button
                    type='submit'
                    className='mx-auto mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
                    Get Invite Code
                  </button>
                )}
              </form>
            </div>
          )}
          {code && (
            <div className='text-center mx-auto'>
              <div className='break-words select-all text-xl font-light mt-4'>
                {code}
              </div>
              <CopyToClipboard
                text={code}
                onCopy={() => {
                  setCopied('Copied!');
                  setTimeout(() => {
                    setCopied('Copy');
                  }, 1000);
                }}>
                <button className='mx-auto mt-4 w-3/4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
                  {copied == 'Copy'
                    ? `Copy ${igusername}'s Invite Code`
                    : copied}
                </button>
              </CopyToClipboard>
              <div
                onClick={(e) => {
                  e.preventDefault;
                  window.location.reload();
                }}
                className='text-center cursor-pointer font-medium text-sm mt-4 text-gray-700 hover:text-gray-500 hover:underline'>
                Create another invite
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
Invite.layout = Layout;
