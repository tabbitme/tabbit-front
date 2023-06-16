import Link from 'next/link';

export const TicketCompleteModal = () => {
  return (
    <dialog id='my_modal_3' className='modal'>
      <form method='dialog' className='modal-box'>
        <h3 className='text-lg font-bold'>Conglaturations!</h3>
        <Link href='/company-mypage' className='btn-primary btn'>
          マイページへ
        </Link>
      </form>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
};
