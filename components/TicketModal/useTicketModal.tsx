import { ethers, Typed } from 'ethers';

interface Window {
  my_modal_3: any;
  ethereum?: any;
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
    // チケットの情報を取得
  };

  const clickHandler = async () => {
    await makeTicket();
    openTicketCompleModal();
  };
  return { clickHandler };
};
