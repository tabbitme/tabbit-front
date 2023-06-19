type Wallet = {
  accountAddress: string;
  userId: string;
};
// mailAddress is for example ichiro%40gmail.com
export const getWalletAddress = async (mailAddress: string) => {
  const url = `https://www.patchwallet.com/_next/data/I790uNfbLI3CBBh7mFxM_/email%3A${mailAddress}.json?userId=email%3A${mailAddress}`;
  const res = await fetch(url, { method: 'GET' });
  const data: Wallet = await res.json();
  return data;
};
