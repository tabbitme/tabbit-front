import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { MenuBarUser } from '../../components/MenuBarUser';

type ResData = {
  users: Users[];
};

type Users = {
  userId: string;
  accountAddress: string;
};

const UserSignup: NextPage = () => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setInputValue(() => e.target.value);
  };

  const fetchAddressBasedOnMail = async () => {
    try {
      const response = await fetch('/api/proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userIds: `email:${inputValue}`,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ResData = await response.json();
      console.log(data);
      const address = data.users[0].accountAddress;
      console.log(address);
      router.push(`/user-index?address=${address}`);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <>
      <MenuBarUser isSignUpButtonDisplayed={true} />
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
                value={inputValue}
                onChange={handleChange}
              />
              <button
                className='btn-primary btn w-3/5'
                onClick={() => fetchAddressBasedOnMail()}
              >
                アカウントを作成してログイン
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
