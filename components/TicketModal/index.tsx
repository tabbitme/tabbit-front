export const TicketModal = () => {
  return (
    <dialog className='modal'>
      <form method='dialog' className='modal-box w-11/12 max-w-5xl'>
        <h3 className='text-lg font-bold'>Hello!</h3>
        <p className='py-4'>Click the button below to close</p>
        <div className='modal-action'>
          {/* if there is a button, it will close the modal */}
          <button className='btn'>Close</button>
        </div>
      </form>
    </dialog>
  );
};
