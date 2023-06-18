import { MenuBarUser } from '../../components/MenuBarUser';
import { TicketCard } from '../../components/TicketCard';

const UserSignup: NextPage = () => {
  return (
    <>
      <MenuBarUser />
      <div>
        <div className='m-auto flex w-4/5 justify-between rounded-md border'>
          <div className='flex flex-col items-center pt-8'>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/pass-sample.png' alt='pass' />
            </div>
            <div className='text-2xl font-bold'>TABBIT #1222</div>
          </div>
          <div className='grid grid-cols-3 gap-4 p-4'>
            <TicketCard
              imgSrc='/ticket-sample.png'
              cardTitle='Resort X - ticket A'
            />
            <TicketCard
              imgSrc='/ticket-sample.png'
              cardTitle='Resort X - ticket A'
            />
            <TicketCard
              imgSrc='/ticket-sample.png'
              cardTitle='Resort X - ticket A'
            />
            <TicketCard
              imgSrc='/ticket-sample.png'
              cardTitle='Resort X - ticket A'
            />
            <TicketCard
              imgSrc='/ticket-sample.png'
              cardTitle='Resort X - ticket A'
            />
            <TicketCard
              imgSrc='/ticket-sample.png'
              cardTitle='Resort X - ticket A'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
