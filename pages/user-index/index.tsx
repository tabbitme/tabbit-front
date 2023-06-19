import { NextPage } from 'next';

import { MenuBarUser } from '../../components/MenuBarUser';
import { PassBox } from '../../components/PassBox';
import { useUserIndex } from './useUserIndex';

const UserSignup: NextPage = () => {
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

export default UserSignup;
