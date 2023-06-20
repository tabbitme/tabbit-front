import { ethers, JsonRpcProvider } from 'ethers';

export class ERC721 {
  private contract: ethers.Contract;
  constructor() {
    const provider = new JsonRpcProvider(
      `https://polygon-mumbai.g.alchemy.com/v2/${process.env.MUMBAI_API_KEY}`
    );
    const contractAddress = '0x3E7E22f04b86e265BC181B4FB69f193bF3259A14';
    const abi = [
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'cardId',
            type: 'uint256',
          },
        ],
        name: 'getTBAAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ];

    this.contract = new ethers.Contract(contractAddress, abi, provider);
  }

  async getTBAAddress(cardId: number) {
    const tbaAddress: string = await this.contract.getTBAAddress(cardId);
    console.log(tbaAddress);
    return tbaAddress;
  }
}
