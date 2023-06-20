import { TicketCard } from '../TicketCard';

export const PassBox = () => {
  return (
    <div className='m-auto flex w-4/5 justify-between rounded-md border bg-neutral-content'>
      <div className='flex flex-col items-center pt-8'>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/pass-sample.png' alt='pass' />
        </div>
        <div className='text-2xl font-bold'>TABBIT #1222</div>
      </div>
      <div className='grid grid-cols-3 gap-4 pr-4 pt-8'>
        <TicketCard
          imgSrc='/ticket-img-sample.png'
          cardTitle='Resort X - ticket A'
        />
        <TicketCard
          imgSrc='/ticket-sample2.png'
          cardTitle='Resort X - ticket A'
        />
        <TicketCard
          imgSrc='/ticket-img-sample3.png'
          cardTitle='Resort X - ticket A'
        />
        <TicketCard
          imgSrc='/ticket-sample4.png'
          cardTitle='Resort X - ticket A'
        />
        <TicketCard
          imgSrc='/ticket-sampe5.png'
          cardTitle='Resort X - ticket A'
        />
        <TicketCard
          imgSrc='/ticket-sample4.png'
          cardTitle='Resort X - ticket A'
        />
      </div>
    </div>
  );
};
