import { FC } from 'react';

import { Card } from '../../components/Card';
import { MenuBar } from '../../components/MenuBar';
import { useCompanyTop } from './useCompanyTop';

export const CompanyTop: FC = () => {
  const { ticketsArr } = useCompanyTop();
  return (
    <div className='bg-white'>
      <MenuBar isImageDisplayed={true} />
      <div className='m-auto mt-4 grid w-4/5 grid-cols-3 gap-4'>
        {ticketsArr &&
          ticketsArr.map((ticket, i) => (
            <Card ticketImgSrc={ticket[0]} ticketTitle={ticket[1]} key={i} />
          ))}
      </div>
    </div>
  );
};
