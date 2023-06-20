import { FC } from 'react';

import { MenuBar } from '../../components/MenuBar';
import { useCompanyTransfer } from './useCompanyTransfer';

export const CompanyTransfer: FC = () => {
  const { transferTicket } = useCompanyTransfer();
  return (
    <>
      <MenuBar />
      <div className='m-auto flex w-4/5 flex-col items-center justify-center gap-4'>
        <h1 className='text-3xl'>Transfer</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='http://arweave.net/mGUEh929a3A_qTondUKvWJFjoR3942irW3eshd9l8Jk'
          alt='shoes'
          className='w-3/5'
        />
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
            onClick={() => transferTicket()}
          >
            送る
          </button>
        </div>
      </div>
    </>
  );
};
