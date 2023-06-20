import { NextPage } from 'next';

import { Box } from '../../components/Box';
import { BoxHead } from '../../components/BoxHead';
import { MenuBar } from '../../components/MenuBar';

const CompanyTop: NextPage = () => {
  return (
    <div className='bg-white'>
      <MenuBar isImageDisplayed={true} />
      <div className='m-auto mt-4  flex w-4/5 flex-col gap-4'>
        <BoxHead />
        <Box name='Resort X - Plan A' amount='0/5000' created='2023/2/11' />
        <Box name='Resort X - Plan B' amount='40/200' created='2023/4/08' />
        <Box name='Resort X - Plan C' amount='33/200' created='2023/5/16' />
        <Box name='Resort X - Plan D' amount='11/200' created='2023/6/25' />
      </div>
    </div>
  );
};

export default CompanyTop;
