import { TicketCompleteModal } from '../TicketCompleteModal';
import { useTickeModal } from './useTicketModal';

export const TicketModal = () => {
  const { clickHandler } = useTickeModal();
  return (
    <>
      <dialog id='my_modal_2' className='modal'>
        <form method='dialog' className='modal-box'>
          <h3 className='text-lg font-bold'>チケット作成</h3>
          <label>
            <div>名前</div>
            <input
              type='text'
              placeholder='Type here'
              className='input-bordered input w-full max-w-xs'
            />
          </label>
          <label>
            <div>シンボル（4文字まで）</div>
            <input
              type='text'
              placeholder='Type here'
              className='input-bordered input w-full max-w-xs'
            />
          </label>
          <label>
            <div>説明</div>
            <textarea
              type='text'
              placeholder='Type here'
              className='input-bordered input w-full max-w-xs'
            />
          </label>
          <label>
            <div>発行枚数</div>
            <input
              type='text'
              placeholder='Type here'
              className='input-bordered input w-full max-w-xs'
            />
          </label>
          <label>
            <div>画像</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/image-uploader.png' alt='image' className='w-2/5' />
            <input class='hidden' type='file' />
          </label>
          <button className='btn-primary btn' onClick={() => clickHandler()}>
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
