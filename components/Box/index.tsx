import Link from 'next/link';
import { FC } from 'react';

type Ticket = {
  name: string;
  amount: string;
  created: string;
};

export const Box: FC<Ticket> = ({ name, amount, created }) => {
  return (
    <div className='flex items-center justify-between rounded-md border-2 border-solid border-neutral p-2 text-black'>
      <div className='font-bold'>{name}</div>
      <div className='grid w-2/5 grid-cols-3 gap-4'>
        <div className='flex items-center'>
          <div className='flex items-center'>{amount}</div>
        </div>
        <div className='flex items-center'>
          <div>{created}</div>
        </div>
        <div>
          <Link href='/company-transfer'>
            <button className='btn-primary btn w-4/5 bg-main'>送付</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
