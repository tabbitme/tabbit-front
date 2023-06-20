import { ethers, Typed } from 'ethers';

interface Window {
  my_modal_3: any;
  ethereum: any;
}
declare var window: Window;

const abi = [
  'function createTicket(uint256 _maxSupply, string memory _name, string memory _description, string memory _imageUri)',
];

export const useTicketModal = () => {
  const openTicketCompleModal = () => {
    window.my_modal_3!.showModal();
  };

  const makeTicket = async () => {
    let signer = null;

    let provider;
    if (window.ethereum == null) {
      // If MetaMask is not installed, we use the default provider,
      // which is backed by a variety of third-party services (such
      // as INFURA). They do not have private keys installed so are
      // only have read-only access
      console.log('MetaMask not installed; using read-only defaults');
      //   provider = ethers.getDefaultProvider();
    } else {
      // Connect to the MetaMask EIP-1193 object. This is a standard
      // protocol that allows Ethers access to make all read-only
      // requests through MetaMask.
      provider = new ethers.BrowserProvider(window.ethereum);

      // It also provides an opportunity to request access to write
      // operations, which will be performed by the private key
      // that MetaMask manages for the user.
      signer = await provider.getSigner();

      const maxSupply = 100;
      const name = '旅館A アクティビティ';
      const description =
        '旅館Aでは、人力の船によるアクティビティが楽しめます。美しい景色を眺めながら、穏やかな水面を漕ぐ贅沢な時間を過ごせます。ゆったりとした船旅で心身を癒し、自然と一体化する感覚を味わえます。親切な船頭が案内してくれるので安心です。この独特の体験は、日常の喧騒を忘れさせ、心をリフレッシュさせます。人力の船でのアクティビティは、静寂と調和を求める方にぴったりです。';
      const imageUri =
        'http://arweave.net/6fceU9xnLdnBRmMegXa9O8MTwqSVVuqYX_5nyiVLo6Q';
      const contractAddress = '0x1464D892F270D5746C3c12C6ED48f8DCdF3e673d';

      const contract = new ethers.Contract(contractAddress, abi, signer);
      const transaction = await contract.createTicket(
        Typed.uint256(maxSupply),
        Typed.string(name),
        Typed.string(description),
        Typed.string(imageUri)
      );
    }
  };

  const clickHandler = async () => {
    await makeTicket();
    openTicketCompleModal();
  };
  return { clickHandler };
};
