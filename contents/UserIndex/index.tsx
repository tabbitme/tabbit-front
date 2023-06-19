import { FC } from 'react';

import { MenuBarUser } from '../../components/MenuBarUser';
import { PassBox } from '../../components/PassBox';
import { useUserIndex } from './useUserIndex';

export const UserIndex: FC = () => {
  const { ticketsArr } = useUserIndex();
  console.log(ticketsArr);
  return (
    <>
      <MenuBarUser />
      <div>
        <PassBox />
      </div>
    </>
  );
};
