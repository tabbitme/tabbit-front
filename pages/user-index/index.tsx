import { NextPage } from 'next';

import { UserIndex } from '../../contents/UserIndex';
import { useUserIndex } from './useUserIndex';

const UserIndexPage: NextPage = () => {
  const { ticketsArr } = useUserIndex();
  console.log(ticketsArr);

  return <UserIndex />;
};

export default UserIndexPage;
