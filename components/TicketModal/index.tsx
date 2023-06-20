import { TicketCompleteModal } from '../TicketCompleteModal';
import { useTicketModal } from './useTicketModal';

export const TicketModal = () => {
  const { clickHandler } = useTicketModal();
  return (
    <>
      <dialog id='my_modal_2' className='modal'>
        <form
          method='dialog'
          className='modal-box flex max-w-md flex-col gap-4 bg-white'
        >
          <h3 className='text-center text-2xl font-bold text-black'>
            チケット作成
          </h3>
          <label>
            <div className='mb-1 text-black'>名前</div>
            <input
              type='text'
              placeholder='e.g. ○○○○旅館 - 2泊3日セット'
              className='input-bordered input-secondary input w-full max-w-xs bg-white'
            />
          </label>
          <label>
            <div className='mb-1 text-black'>説明</div>
            <textarea
              placeholder='e.g. ○○○○旅館の2泊3日の宿泊チケットです。こちらのチケットを活用することで期間中はすべて飲食自由にご利用いただけます。'
              className='textarea-bordered textarea-secondary textarea h-28 w-full max-w-xs bg-white'
            />
          </label>
          <label>
            <div className='mb-1 text-black'>発行枚数</div>
            <input
              type='text'
              placeholder='e.g. 5000'
              className='input-bordered input-secondary input w-full max-w-xs bg-white'
            />
          </label>
          <label>
            <div className='mb-1 text-black'>画像</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/image-uploader.png' alt='image' className='w-2/5' />
            <input className='hidden' type='file' />
          </label>
          <button
            className='btn-primary btn m-auto mt-4 max-w-xs bg-main text-white'
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
