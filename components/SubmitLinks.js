import { useRouter } from 'next/router';
import { useState, useContext } from 'react';

import { UserContext } from '../lib/context';
import { toastConfig } from '../lib/utils';
import { firestore } from '../lib/firebase';
import { toast } from 'react-toastify';

const link = require('url');

export default function SubmitLinks({ links, setLinks, hasData }) {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const { username } = useContext(UserContext);

  const handleRemove = (event, key) => {
    event.preventDefault();

    setLinks(links.filter((_, i) => i !== key));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);

    toast.dark('Your profile will be updated shortly', toastConfig);

    const postRef = firestore.collection('makers').doc(username);
    const linkData = {
      links: links,
    };
    await postRef.set(linkData, { merge: true });

    router.push('/tools');
  };

  if (!hasData && links.length == 0) {
    return <></>;
  }

  return (
    <div className='px-4 py-4 mb-12 bg-white rounded-lg'>
      {links.length != 0 && (
        <ul className='divide-y divide-gray-200'>
          {links.map((item, index) => (
            <li key={index} className='py-4 flex'>
              <img
                className='h-10 rounded-sm'
                src={item.logo !== '' ? item.logo : '/link.png'}
              />
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900'>
                  {item.title}
                </p>
                <p className='text-sm text-gray-500'>{item.url}</p>
                <div
                  onClick={(e) => handleRemove(e, index)}
                  className='cursor-pointer text-sm text-red-500 hover:underline'>
                  Remove
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={handleSubmit}
        type='submit'
        className='mx-auto mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
        {submitted ? 'Saving...' : hasData ? 'Update' : 'Submit'}
      </button>
    </div>
  );
}
