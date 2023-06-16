export const BoxHead = () => {
  return (
    <div className='flex items-center justify-between rounded-md border-2 border-solid border-neutral p-2'>
      <div className='font-bold'>Title</div>
      <div className='flex items-center justify-around gap-4'>
        <div>Amount</div>
        <div>Created</div>
        <div>Transfer</div>
      </div>
    </div>
  );
};
