import { useRouter } from 'next/router';

type Ticket = [string, string];

export const useUserIndex = () => {
  const router = useRouter();
  console.log(router.query.address); // UserのAAアドレスを取得

  // ブロックチェーンと通信してPassとチケットの一覧情報を取得して、TicketArrとして返す
  const ticketsArr: Ticket[] = [
    ['/sample-shoes.jpg', 'Resort X - Plan A'],
    ['/sample-shoes.jpg', 'Resort X - Plan A'],
    ['/sample-shoes.jpg', 'Resort X - Plan A'],
  ];
  return { ticketsArr };
};
