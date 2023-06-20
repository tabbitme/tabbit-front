type Ticket = [string, string];

export const useCompanyTop = () => {
  // ブロックチェーンと通信してチケットの一覧情報を取得して、TicketArrとして返す
  const ticketsArr: Ticket[] = [
    [
      'http://arweave.net/mGUEh929a3A_qTondUKvWJFjoR3942irW3eshd9l8Jk',
      '旅館A 2day',
    ],
    [
      'http://arweave.net/6fceU9xnLdnBRmMegXa9O8MTwqSVVuqYX_5nyiVLo6Q',
      '旅館A アクティビティ',
    ],
  ];

  return { ticketsArr };
};
