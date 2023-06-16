import { Box } from '../../components/Box';
import { BoxHead } from '../../components/BoxHead';
import { MenuBar } from '../../components/MenuBar';

const CompanyTop: NextPage = () => {
  return (
    <>
      <MenuBar />
      <div className='m-auto mt-4  flex w-4/5 flex-col gap-4'>
        <BoxHead />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </>
  );
};

export default CompanyTop;
