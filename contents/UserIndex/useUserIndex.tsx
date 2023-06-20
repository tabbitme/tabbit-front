import { useRouter } from 'next/router';

import { getOwnedNfts } from '../../utils';

type Ticket = [string, string];

export const useUserIndex = () => {
  const router = useRouter();
  const addr = router.query.address as string; // UserのAAアドレスを取得
  getOwnedNfts(addr);

  // ブロックチェーンと通信してPassとチケットの一覧情報を取得して、TicketArrとして返す
  const ticketsArr: Ticket[] = [
    ['/sample-shoes.jpg', 'Resort X - Plan A'],
    ['/sample-shoes.jpg', 'Resort X - Plan A'],
    ['/sample-shoes.jpg', 'Resort X - Plan A'],
  ];
  return { ticketsArr };
};
