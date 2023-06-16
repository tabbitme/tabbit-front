import { FC } from 'react';

export const MenuBar: FC = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn-ghost btn text-xl normal-case text-primary'>TABBIT</a>
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
  );
};
