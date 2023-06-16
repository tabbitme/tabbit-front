import { FC } from 'react';

export const MenuBar: FC = () => {
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <a className='btn-ghost btn text-xl normal-case text-primary'>
            TABBIT
          </a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a>マイページ</a>
            </li>
            <li>
              <a>チケット作成</a>
            </li>
            <li>
              <a>Wallet Connect</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='max-h-80 w-screen'>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/hero-img.png'
          fill={true}
          objectFit='contain'
          alt='hero'
          className='relative'
        />
      </div>
    </div>
  );
};
