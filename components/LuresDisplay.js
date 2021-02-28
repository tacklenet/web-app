import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import LureDetails from './LureDetails';
import { useRouter } from 'next/router';

export default function LuresDisplay({ displayModal }) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/lure/mischief');
  };
  return (
    <>
      <div
        onClick={displayModal ? onOpenModal : handleClick}
        className='relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black'>
        <div className='flex-shrink-0'>
          <img className='h-32 w-32 rounded object-cover' src='/opm.jpg' alt />
        </div>
        <div className='flex-1 min-w-0'>
          <a href='#' className='focus:outline-none'>
            <span className='absolute inset-0' aria-hidden='true' />
            <p className='inline-flex items-center px-1.5 py-0.5 rounded-md text-md font-medium bg-gray-100 text-gray-800'>
              $85
            </p>
            <p className='ml-1 inline text-md font-bold text-gray-900'>
              Mischief
            </p>
            <p className='text-sm text-gray-500 truncate ml-2 mt-2'>
              5" Topwater Rat {displayModal ? 'true' : 'false'}
            </p>
          </a>
        </div>
      </div>

      <Modal open={open} onClose={onCloseModal} center>
        <LureDetails />
      </Modal>
    </>
  );
}
