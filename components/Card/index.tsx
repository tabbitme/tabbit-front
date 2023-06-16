export const Card = () => {
  return (
    <div className='card relative w-96 bg-base-100 shadow-xl'>
      <div className='badge badge-outline absolute left-3 top-3'>x200</div>
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/sample-shoes.jpg' alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Resort X - Plan A</h2>
      </div>
    </div>
  );
};
