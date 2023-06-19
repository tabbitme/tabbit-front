import Link from 'next/link';
import { FC } from 'react';

import { TicketModal } from '../TicketModal';

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
            <li className='flex items-center justify-center'>
              <div className='font-bold'>
                <Link href='/company-mypage'>マイページ</Link>
              </div>
            </li>
            <li className='flex items-center justify-center'>
              <div
                onClick={() => window.my_modal_2.showModal()}
                className='font-bold'
              >
                チケット作成
              </div>
            </li>
            <li>
              <div>
                <button className='btn-primary btn h-1/2 text-white'>
                  Wallet Connect
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=' w-screen'>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/hero-img.png'
          fill={true}
          objectFit='contain'
          alt='hero'
          className='w-full'
        />
      </div>
      <TicketModal />
    </div>
  );
};
