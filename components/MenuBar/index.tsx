import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { TicketModal } from '../TicketModal';

type MenuBarProp = {
  isImageDisplayed?: boolean;
};

interface Window {
  my_modal_2: any;
}
declare var window: Window;

export const MenuBar: FC<MenuBarProp> = ({ isImageDisplayed }) => {
  return (
    <div>
      <div className='navbar bg-white'>
        <div className='ml-4 flex-1'>
        <Link href='/'>
        
          <Image src='tabbit_logo.svg' alt='Logo' width={129} height={53} />
         
        </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li className='flex items-center justify-center'>
              <div className='font-bold text-black'>
                <Link href='/company-mypage'>マイページ</Link>
              </div>
            </li>
            <li className='flex items-center justify-center'>
              <div
                onClick={() => window.my_modal_2!.showModal()}
                className='font-bold text-black'
              >
                チケット作成
              </div>
            </li>
            <li>
              <div>
                <button className='btn-primary btn h-1/2 bg-main text-white'>
                  Wallet Connect
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {isImageDisplayed && (
        <div className='w-screen'>
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img src='/hero-img.png' alt='hero' className='w-full' />
        </div>
      )}
      <TicketModal />
    </div>
  );
};
