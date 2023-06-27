import { TicketCard } from '../TicketCard';

export const PassBox = () => {
  return (
    <div className='m-auto mt-8 flex w-11/12 justify-between gap-16 rounded-md border bg-neutral-content'>
      <div className='flex basis-1/4 flex-col items-center pl-2 pt-8'>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/hokkaido-hotei.png' alt='pass' className='w-96' />
        </div>
        <div className='text-2xl font-bold'>ニセコホテル #1222</div>
      </div>
      <div className='grid basis-3/4 grid-cols-3 gap-y-4 pr-2 pt-10'>
        <TicketCard imgSrc='/ticket_10.png' cardTitle='ペア宿泊券一泊二日' />
        <TicketCard
          imgSrc='/ticket_11.png'
          cardTitle='スノーボード・ヘルメット レンタル'
        />
        <TicketCard imgSrc='/ticket_14.png' cardTitle='駐車場B-8ゾーン' />
        <TicketCard
          imgSrc='/ticket_13.png'
          cardTitle='レストラン檜 ビュッフェ'
        />
        <TicketCard imgSrc='/ticket_12.png' cardTitle='スノーボード レンタル' />
        <TicketCard imgSrc='/ticket_15.png' cardTitle='味噌ラーメン引換券' />
      </div>
    </div>
  );
};
