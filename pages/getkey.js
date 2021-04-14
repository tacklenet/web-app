import { useState } from 'react';
import Link from 'next/link';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const Wallet = require('ethereumjs-wallet').default;
import Layout from '@/components/Layout';
import MetaTags from '@/components/MetaTags';

export default function GetKey() {
  const [isGenerated, setIsGenerated] = useState(false);
  const [copied, setCopied] = useState('Copy');
  const [key, setKey] = useState('Request a key (beta)');

  const GenKey = () => {
    setKey(Wallet.generate(true).getAddressString());
    setIsGenerated(true);
  };
  return (
    <>
      <MetaTags title='Get Beta Code' />

      <div className='px-4 lg:px-12 max-w-7xl mx-auto'>
        <div className='mt-12 text-center'>
          <h1 className='text-2xl font-bold mb-2'>Get Key</h1>
          <div className='break-words select-all text-xl font-light my-2'>
            {key}
          </div>
          {!isGenerated ? (
            <button
              onClick={GenKey}
              className='mx-auto mt-4 w-1/3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
              Generate New Key
            </button>
          ) : (
            <CopyToClipboard
              text={key}
              onCopy={() => {
                setCopied('Copied!');
                setTimeout(() => {
                  setCopied('Copy');
                }, 1000);
              }}>
              <button className='mx-auto mt-4 w-1/3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
                {copied}
              </button>
            </CopyToClipboard>
          )}
          <Link href='/post'>
            <a>
              <div className='mt-3 text-sm hover:text-gray-800 underline'>
                Go post lure
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
GetKey.layout = Layout;
