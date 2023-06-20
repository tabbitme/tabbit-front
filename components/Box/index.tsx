import Link from 'next/link';

export const Box = () => {
  return (
    <div className='flex items-center justify-between rounded-md border-2 border-solid border-neutral p-2 text-black'>
      <div className='font-bold'>旅館A 2day</div>
      <div className='grid w-2/5 grid-cols-3 gap-4'>
        <div className='flex items-center'>
          <div className='flex items-center'>1/100</div>
        </div>
        <div className='flex items-center'>
          <div>2023/11/13</div>
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
