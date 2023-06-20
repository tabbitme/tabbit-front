type Ticket = [string, string];

export const useCompanyTop = () => {
  // ブロックチェーンと通信してチケットの一覧情報を取得して、TicketArrとして返す
  const ticketsArr: Ticket[] = [
    ['/ticket-sample4.png', 'Resort X - Plan A'],
    ['/ticket-sample2.png', 'Resort Y - Plan B'],
    ['/ticket-img-sample3.png', 'Resort Z - Plan C'],
  ];
  return { ticketsArr };
};
