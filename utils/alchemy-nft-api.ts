// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Alchemy, Network } from 'alchemy-sdk';

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: process.env.MUMBAI_API_KEY, // Replace with your Alchemy API Key.
  network: Network.MATIC_MUMBAI, // Replace with your network.
};

const alchemy = new Alchemy(settings);
export const getOwnedNfts = async (ownerAddr: string) => {
  console.log(ownerAddr);
  if (!ownerAddr) {
    return;
  }
  const nftsForOwner = await alchemy.nft.getNftsForOwner(ownerAddr);
  console.log('number of NFTs found:', nftsForOwner.totalCount);
  for (const nft of nftsForOwner.ownedNfts) {
    console.log('===');
    console.log('contract address:', nft.contract.address);
    console.log('token ID:', nft.tokenId);
  }
};

// const response = await alchemy.nft.getNftMetadata(
//   "0x5180db8F5c931aaE63c74266b211F580155ecac8",
//   "1590"
// );
