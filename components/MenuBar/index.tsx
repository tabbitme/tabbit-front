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
            <li>
              <Link href='/company-mypage'>マイページ</Link>
            </li>
            <li>
              <div onClick={() => window.my_modal_2.showModal()}>
                チケット作成
              </div>
            </li>
            <li>
              <a>Wallet Connect</a>
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
