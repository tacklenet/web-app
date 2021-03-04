import { useRouter } from 'next/router';

import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import MetaTags from '../components/MetaTags';

import { categories, subToMain, toastConfig } from '../lib/utils';
import { firestore, timestamp } from '../lib/firebase';
import { toast } from 'react-toastify';

// const Web3Utils = require('web3-utils');

const link = require('url');

export default function Makers() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  // const [key, setKey] = useState('');
  const [description, setDescription] = useState('');
  // const [isValid, setIsValid] = useState(false);

  const router = useRouter();

  // const handleKey = (e) => {
  //   e.preventDefault();
  //   setKey(e.target.value);
  //   setIsValid(false);
  //   if (Web3Utils.isAddress(e.target.value)) {
  //     setIsValid(true);
  //   }
  // };

  const handlePrice = (e) => {
    const val = e.target.value;
    const max = 5001;

    console.log(typeof val);
    const maxLength = max.toString().length - 1;
    const newVal =
      val < max ? val : parseInt(val.toString().substring(0, maxLength));
    setPrice(newVal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var regExp = /\/p\/(.*?)\//;
    const id = url.match(regExp);

    if (description.length < 18) {
      toast.error('Description too short', toastConfig);

      return;
    }

    if (link.parse(url).host != 'www.instagram.com') {
      setUrl('');
      toast.error('Instagram links only', toastConfig);

      return;
    }

    if (!url.includes('/p/')) {
      setUrl('');
      toast.error('Instagram posts only', toastConfig);

      return;
    }

    firestore.collection('submissions').add(
      {
        name: name,
        description: description,
        category: subToMain(type),
        subcategory: type,
        price: price ? parseFloat(price, 10).toFixed(2) : null,
        id: id[1],
        timestamp: timestamp,
      },
      { merge: true }
    );
    setName('');
    setUrl('');
    setPrice('');
    // setKey('');
    //setIsValid(false);
    setDescription('');
    toast.dark('Your bait will appear in a minute 🎉', toastConfig);
    router.push('/lures');
  };

  return (
    <>
      <MetaTags title='Post a Lure on Tackle.net' />
      <Layout>
        <div className='px-4 lg:px-12 max-w-7xl mx-auto'>
          <div className='mt-12'>
            <h1 className='text-3xl font-bold leading-tight text-gray-900'>
              Post Lure
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
                  Tackle.net is in open beta testing. Please backup your post
                  details as data maybe wiped.
                </p>
                <p className='mt-3 text-sm md:mt-0 md:ml-6'>
                  <Link href='/'>
                    <a className='whitespace-nowrap font-medium text-black hover:text-blue-600'>
                      More details <span aria-hidden='true'>→</span>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <main className='mt-5'>
            {/* Replace with your content */}

            <div className='px-4 py-4 mb-24 bg-white rounded-lg'>
              <div>
                <form onSubmit={handleSubmit}>
                  {/* <div>
                    <label
                      htmlFor='name'
                      className='block text-lg font-medium text-gray-700'>
                      Enter your key to post
                      <span className='ml-1 text-sm underline hover:text-black'>
                        <Link href='/getkey' target='_blank'>
                          (get key)
                        </Link>
                      </span>
                    </label>
                    <input
                      disabled={isValid}
                      type='text'
                      value={isValid ? '✅ ' + key : key}
                      onChange={handleKey}
                      name='key'
                      id='key'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-500 rounded-md'
                    />
                  </div> */}
                  <div className='mt-4'>
                    <label
                      htmlFor='name'
                      className='block text-lg font-medium text-gray-700'>
                      Lure Name
                    </label>
                    <input
                      type='text'
                      value={name}
                      onChange={({ target }) => setName(target.value)}
                      name='name'
                      id='name'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-500 rounded-md'
                    />
                  </div>
                  <div className='mt-4'>
                    <div className='w-full sm:border-gray-200'>
                      <label
                        htmlFor='about'
                        className='text-lg font-medium text-gray-700'>
                        Description
                      </label>
                      <div className='mt-2'>
                        <textarea
                          id='description'
                          name='description'
                          rows={3}
                          className=' shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-500 rounded-md'
                          defaultValue={description}
                          onChange={({ target }) =>
                            setDescription(target.value)
                          }
                        />
                        <p className='mt-2 text-sm text-gray-500'>
                          Share specs, how it was made, how to fish it...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='mt-4'>
                    <label
                      htmlFor='url'
                      className='block text-lg font-medium text-gray-700'>
                      Instagram Post URL
                    </label>
                    <input
                      type='url'
                      value={url}
                      onChange={({ target }) => setUrl(target.value)}
                      name='url'
                      id='url'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-500 rounded-md'
                    />
                  </div>
                  <div className='mt-4'>
                    <label
                      htmlFor='location'
                      className='block text-lg font-medium text-gray-700'>
                      Lure Type
                    </label>
                    <select
                      id='type'
                      name='type'
                      value={type}
                      onChange={({ target }) => setType(target.value)}
                      className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                      <option selected value>
                        Select
                      </option>

                      {categories.map((main) => (
                        <optgroup label={main.main}>
                          {main.sub.map((sub) => (
                            <option key={sub}>{sub}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  <div className='mt-4'>
                    <label
                      htmlFor='price'
                      className='block text-lg font-medium text-gray-700'>
                      Price
                      <span className='ml-1 text-sm'>
                        (leave empty if not for sale)
                      </span>
                    </label>
                    <div className='mt-2 relative rounded-md shadow-sm'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <span className='text-gray-500 sm:text-sm'>$</span>
                      </div>
                      <input
                        type='number'
                        name='price'
                        id='price'
                        onChange={handlePrice}
                        value={price}
                        className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                        placeholder={0.0}
                        aria-describedby='price-currency'
                      />
                      <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                        <span
                          className='text-gray-500 sm:text-sm'
                          id='price-currency'>
                          USD
                        </span>
                      </div>
                    </div>
                  </div>

                  {name && description && url && type ? (
                    <button
                      type='submit'
                      className='mx-auto mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
                      Post
                    </button>
                  ) : (
                    <button
                      disabled
                      type='submit'
                      className='mx-auto mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      Post
                    </button>
                  )}
                </form>
              </div>
            </div>

            {/* /End replace */}
          </main>
        </div>
      </Layout>
    </>
  );
}
