type Ticket = [string, string];

export const useCompanyTop = () => {
  // ブロックチェーンと通信してチケットの一覧情報を取得して、TicketArrとして返す
  const ticketsArr: Ticket[] = [
    ['/sample-shoes.jpg', 'Resort X - Plan A'],
    ['/sample-shoes.jpg', 'Resort X - Plan A'],
    ['/sample-shoes.jpg', 'Resort X - Plan A'],
  ];
  return { ticketsArr };
};
