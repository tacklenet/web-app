import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import LureDetails from './LureDetails';
import { useRouter } from 'next/router';
import { truncateString } from '../lib/utils';

export default function LuresDisplay({ displayModal, lure }) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/lure/${lure.id}`);
  };
  return (
    <>
      <div
        onClick={displayModal ? onOpenModal : handleClick}
        className='relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black'>
        <div className='flex-shrink-0'>
          <img
            className='h-32 w-32 rounded object-cover'
            src={lure?.image}
            alt={lure?.description && truncateString(lure?.description, 100)}
          />
        </div>
        <div className='flex-1 min-w-0'>
          <a href='#' className='focus:outline-none'>
            <span className='absolute inset-0' aria-hidden='true' />
            {lure?.price && (
              <p className='inline-flex items-center px-1.5 py-0.5 rounded-md text-md font-medium bg-gray-100 text-gray-800'>
                {lure?.price}
              </p>
            )}

            <p className='ml-1 inline text-md font-bold text-gray-900'>
              {lure?.name}
            </p>
            <p className='text-sm text-gray-500 truncate ml-1 mt-2'>
              Made by {lure?.displayname}
            </p>
            {lure?.type && (
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800'>
                {lure?.type}
              </span>
            )}
          </a>
        </div>
      </div>

      <Modal open={open} onClose={onCloseModal} center>
        <LureDetails />
      </Modal>
    </>
  );
}
