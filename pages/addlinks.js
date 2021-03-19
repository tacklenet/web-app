const axios = require('axios');

import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../lib/context';
import Link from 'next/link';

import SubmitLinks from '../components/SubmitLinks';
import Layout from '../components/Layout';
import MetaTags from '../components/MetaTags';

import { toastConfig, urlDomain, validateUrl } from '../lib/utils';
import { firestore } from '../lib/firebase';
import { toast } from 'react-toastify';

const link = require('url');

export default function AddLinks() {
  const { username } = useContext(UserContext);
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [logo, setLogo] = useState('');
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    let unsubscribe;
    if (username) {
      const ref = firestore.collection('makers').doc(username);
      unsubscribe = ref.onSnapshot((doc) => {
        if (doc.data().links?.length > 0) {
          setLinks(doc.data().links);
          setHasData(true);
        }
      });
    }
    return unsubscribe;
  }, [username]);

  const handleLogo = async (link) => {
    const domain = urlDomain(link);
    const clearbitLogoUrl = 'https://logo.clearbit.com/' + domain;
    await axios
      .get(clearbitLogoUrl)
      .then((response) => {
        setLogo(clearbitLogoUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAdd = async (event) => {
    event.preventDefault();

    if (validateUrl(link)) {
      setLinks((oldArray) => [
        ...oldArray,
        { title: title, logo: logo, url: link },
      ]);
    } else {
      toast.error('Oops...try again', toastConfig);
    }

    setTitle('');
    setLink('');
    setLogo('/link.png');
  };

  return (
    <>
      <MetaTags title='Post a Lure on Tackle.net' />

      <div className='px-4 lg:px-12 max-w-7xl mx-auto'>
        <div className='mt-12'>
          <h1 className='text-3xl font-bold leading-tight text-gray-900'>
            Profile Links
          </h1>
        </div>

        <main className='mt-5'>
          <div className='px-4 py-4 mb-12 bg-white rounded-lg'>
            <div>
              <form onSubmit={handleAdd}>
                <div>
                  <label
                    htmlFor='url'
                    className='block text-lg font-medium text-gray-700'>
                    Link
                  </label>
                  <div className='mt-1 relative rounded-md shadow-sm'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <img
                        className='w-6 h-6 rounded-sm'
                        src={logo !== '' ? logo : '/link.png'}></img>
                    </div>
                    <input
                      type='url'
                      name='url'
                      id='url'
                      value={link}
                      onChange={(e) => {
                        e.preventDefault();
                        setLink(e.target.value);
                        handleLogo(e.target.value);
                      }}
                      className='mt-1 pl-12 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-500 rounded-md'
                      placeholder='https://example.com'
                    />
                  </div>
                </div>

                <div className='mt-4'>
                  <label
                    htmlFor='title'
                    className='block text-lg font-medium text-gray-700'>
                    Title
                  </label>

                  <input
                    type='text'
                    value={title}
                    onChange={(e) => {
                      e.preventDefault();
                      setTitle(e.target.value);
                    }}
                    name='title'
                    id='title'
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-500 rounded-md'
                  />
                </div>
                {title && link && (
                  <button
                    type='submit'
                    className='mx-auto mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
                    + Add
                  </button>
                )}
              </form>
            </div>
          </div>

          <SubmitLinks links={links} setLinks={setLinks} hasData={hasData} />
        </main>
      </div>
    </>
  );
}
AddLinks.layout = Layout;
