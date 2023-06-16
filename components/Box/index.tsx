import Link from 'next/link';

export const Box = () => {
  return (
    <div className='flex items-center justify-between rounded-md border-2 border-solid border-neutral p-2'>
      <div className='font-bold'>Resort X - Plan A</div>
      <div className='flex items-center justify-around gap-4'>
        <div>4333/5000</div>
        <div>2023/11/13</div>
        <div>
          <Link href='/company-transfer'>
            <button className='btn-primary btn'>送付</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
