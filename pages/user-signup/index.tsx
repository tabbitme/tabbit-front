import Link from 'next/link';

import { MenuBarUser } from '../../components/MenuBarUser';

const UserSignup: NextPage = () => {
  return (
    <>
      <MenuBarUser />
      <div className='m-auto flex w-4/5 gap-4'>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/sample-shoes.jpg' alt='shoes' />
        </div>
        <div className='m-auto mt-4  flex w-4/5 flex-col gap-4'>
          <h1 className='text-3xl font-bold'>アカウントを作成しよう</h1>
          <p>届いたメールを使ってアカウントを作成しよう</p>
          <input
            type='text'
            placeholder='メールアドレス'
            className='input-bordered input w-full'
          />
          <button className='btn-primary btn'>アカウントを作成する</button>
          <Link href='/' className='underline'>
            既にアカウントを作成している方はこちら
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
