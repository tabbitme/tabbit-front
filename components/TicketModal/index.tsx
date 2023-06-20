import { useState } from 'react';

import { TicketCompleteModal } from '../TicketCompleteModal';
import { useTicketModal } from './useTicketModal';

export const TicketModal = () => {
  const { clickHandler } = useTicketModal();

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [maxSupply, setMaxSupply] = useState<number>(0);
  const [image, setImage] = useState<string>('default');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMaxSupplyChange = (event) => {
    setMaxSupply(event.target.value);
  };

  const handleSubmit = (event) => {
    clickHandler(name, description, maxSupply);
  };

  return (
    <>
      <dialog id='my_modal_2' className='modal'>
        <form method='dialog' className='modal-box' onSubmit={handleSubmit}>
          <h3 className='text-lg font-bold'>チケット作成</h3>
          <label>
            <div>名前</div>
            <input
              type='text'
              placeholder='Type here'
              className='input-bordered input w-full max-w-xs'
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            <div>説明</div>
            <textarea
              placeholder='Type here'
              className='input-bordered input w-full max-w-xs'
              value={description}
              onChange={handleDescriptionChange}
            />
          </label>
          <label>
            <div>発行枚数</div>
            <input
              type='text'
              placeholder='Type here'
              className='input-bordered input w-full max-w-xs'
              value={maxSupply}
              onChange={handleMaxSupplyChange}
            />
          </label>
          <label>
            <div>画像</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/image-uploader.png' alt='image' className='w-2/5' />
            <input className='hidden' type='file' />
          </label>
          <button className='btn-primary btn' type='submit'>
            作成する
          </button>
        </form>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
      <TicketCompleteModal />
    </>
  );
};
