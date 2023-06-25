type Ticket = [string, string];

export const useCompanyTop = () => {
  // ブロックチェーンと通信してチケットの一覧情報を取得して、TicketArrとして返す
  const ticketsArr: Ticket[] = [
    ['/ticket_16.png', 'ペア宿泊券一泊二日'],
    ['/ticket-sample2.png', '川下り（お堀りめぐり）'],
    ['/ticket_11.png', 'スノーボード/ヘルメット レンタル'],
    ['ticket_10.png', 'ペア宿泊券一泊二日'],
    ['/ticket_12.png', 'スノーボード レンタル'],
    ['/ticket_15.png', '札幌ラーメン引換券'],
    ['/ticket_14.png', '駐車場B-8ゾーン'],
    ['/ticket_13.png', 'レストラン檜 ビュッフェ'],
  ];
  return { ticketsArr };
};
