import { FC } from 'react';

import { MenuBar } from '../../components/MenuBar';
import { useCompanyTransfer } from './useCompanyTransfer';

export const CompanyTransfer: FC = () => {
  const { transferTicket } = useCompanyTransfer();

  return (
    <>
      <MenuBar />
      <div className='m-auto flex w-4/5 flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold'>Transfer</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/ticket_12.png' alt='shoes' className='w-2/5' />
        <div className='w-full'>
          <p>Quantity</p>
          <input
            type='text'
            placeholder='Type here'
            className='input-bordered input w-full '
          />
        </div>
        <div className='w-full'>
          <p>Transfer to</p>
          <input
            type='text'
            placeholder='Type here'
            className='input-bordered input w-full '
          />
        </div>
        <div className='w-full'>
          <button
            className='btn-primary btn w-full'
            onClick={() => alert('送信しました')}
          >
            送る
          </button>
        </div>
      </div>
    </>
  );
};
