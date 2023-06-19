import { NextPage } from 'next';
import Link from 'next/link';

import { MenuBarUser } from '../../components/MenuBarUser';

const UserSignup: NextPage = () => {
  return (
    <>
      <MenuBarUser />
      <div className='m-auto flex w-full gap-8'>
        <div className='basis-1/2'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/sea-mountain.png' alt='sea-mountain' className='w-full' />
        </div>
        <div className='basis-1/2 '>
          <div className='flex h-full items-center justify-center'>
            <div className='m-auto flex w-4/5 flex-col gap-4'>
              <h1 className='text-4xl font-bold'>アカウントを作成しよう</h1>
              <p className='text-2xl'>
                届いたメールを使ってアカウントを作成しよう
              </p>
              <input
                type='text'
                placeholder='メールアドレス'
                className='input-bordered input w-3/5'
              />
              <button className='btn-primary btn w-3/5'>
                アカウントを作成する
              </button>
              <Link href='/' className='underline'>
                既にアカウントを作成している方はこちら
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
