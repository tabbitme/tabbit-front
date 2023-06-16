export const TicketModal = () => {
  return (
    <dialog id='my_modal_2' className='modal'>
      <form method='dialog' className='modal-box'>
        <h3 className='text-lg font-bold'>Hello!</h3>
        <p className='py-4'>Press ESC key or click outside to close</p>
      </form>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
};
