import Link from 'next/link';

export const TicketCompleteModal = () => {
  return (
    <dialog id='my_modal_3' className='modal'>
      <form method='dialog' className='modal-box w-80'>
        <h3 className='text-xl font-bold'>Conglaturations!</h3>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/ticket-img-sample.png'
          alt='ticket'
          className='mx-auto mt-2 w-60 rounded-md'
        />
        <div className='flex items-center justify-center'>
          <button className='btn-primary btn mx-auto mt-2'>
            <Link href='/company-mypage' className='btn-primary btn'>
              マイページへ
            </Link>
          </button>
        </div>
      </form>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
};
