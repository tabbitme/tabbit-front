import { FC } from 'react';

type TicketCardProps = {
  imgSrc: string;
  cardTitle: string;
};
export const TicketCard: FC<TicketCardProps> = ({ imgSrc, cardTitle }) => {
  return (
    <div className='card relative w-72 bg-base-100 shadow-xl'>
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgSrc} alt='Ticket' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{cardTitle}</h2>
      </div>
    </div>
  );
};
