export const TicketCard = () => {
  return (
    <div className='card relative w-72 bg-base-100 shadow-xl'>
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/ticket-sample.png' alt='Ticket' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Resort X - Plan A</h2>
      </div>
    </div>
  );
};
