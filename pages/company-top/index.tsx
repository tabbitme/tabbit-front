import { Card } from '../../components/Card';
import { MenuBar } from '../../components/MenuBar';

const CompanyTop: NextPage = () => {
  return (
    <>
      <MenuBar />
      <div className='m-auto mt-4 grid w-4/5 grid-cols-3 gap-4'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default CompanyTop;
