import { TicketCompleteModal } from '../TicketCompleteModal';
import { useTickeModal } from './useTicketModal';

export const TicketModal = () => {
  const { clickHandler } = useTickeModal();
  return (
    <>
      <dialog id='my_modal_2' className='modal'>
        <form
          method='dialog'
          className='modal-box flex max-w-md flex-col gap-4'
        >
          <h3 className='text-center text-2xl font-bold'>チケット作成</h3>
          <label>
            <div className='mb-1'>名前</div>
            <input
              type='text'
              placeholder='e.g. ○○○○旅館 - 2泊3日セット'
              className='input-bordered input-secondary input w-full max-w-xs'
            />
          </label>
          <label>
            <div className='mb-1'>説明</div>
            <textarea
              placeholder='e.g. ○○○○旅館の2泊3日の宿泊チケットです。こちらのチケットを活用することで期間中はすべて飲食自由にご利用いただけます。'
              className='textarea-bordered textarea-secondary textarea h-28 w-full max-w-xs'
            />
          </label>
          <label>
            <div className='mb-1'>発行枚数</div>
            <input
              type='text'
              placeholder='e.g. 5000'
              className='input-bordered input-secondary input w-full max-w-xs'
            />
          </label>
          <label>
            <div className='mb-1'>画像</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/image-uploader.png' alt='image' className='w-2/5' />
            <input className='hidden' type='file' />
          </label>
          <button
            className='btn-primary btn m-auto mt-4 max-w-xs'
            onClick={() => clickHandler()}
          >
            作成する
          </button>
        </form>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
      <TicketCompleteModal />
    </>
  );
};
