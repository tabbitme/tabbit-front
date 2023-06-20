import { ethers, Typed } from 'ethers';

interface Window {
  my_modal_3: any;
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
      provider = ethers.getDefaultProvider();
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
      const name = 'Ticket Name';
      const description = 'Ticket Description';
      const imageUri = 'https://example.com/image.jpg';
      const contractAddress = '0x3E7E22f04b86e265BC181B4FB69f193bF3259A14';

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
