type Ticket = [string, string];

export const useUserIndex = () => {
  // ブロックチェーンと通信してPassとチケットの一覧情報を取得して、TicketArrとして返す
  const ticketsArr: Ticket[] = [
    ['/sample-shoes.jpg', 'Resort X - Plan A'],
    ['/sample-shoes.jpg', 'Resort X - Plan A'],
    ['/sample-shoes.jpg', 'Resort X - Plan A'],
  ];
  return { ticketsArr };
};
