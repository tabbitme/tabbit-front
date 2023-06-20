import { ethers, Typed } from 'ethers';

interface Window {
  my_modal_3: any;
  ethereum: any;
}

declare var window: Window;

export const useCompanyTransfer = () => {
  // チケットを送付する処理を書く

  const transferTicket = async () => {
    const abi = [
      'function issueTickets(uint256 ticketId, address _to, uint256 _quantity)',
    ];

    const issueTicket = async () => {
      let signer = null;

      let provider;
      if (window.ethereum == null) {
        // If MetaMask is not installed, we use the default provider,
        // which is backed by a variety of third-party services (such
        // as INFURA). They do not have private keys installed so are
        // only have read-only access
        console.log('MetaMask not installed; using read-only defaults');
        // provider = ethers.getDefaultProvider();
      } else {
        // Connect to the MetaMask EIP-1193 object. This is a standard
        // protocol that allows Ethers access to make all read-only
        // requests through MetaMask.
        provider = new ethers.BrowserProvider(window.ethereum);

        // It also provides an opportunity to request access to write
        // operations, which will be performed by the private key
        // that MetaMask manages for the user.
        signer = await provider.getSigner();

        const ticketId = 0;
        const to = '0x552743d6E77F37c3AE75e1238519065B14Afea61';
        const quantity = 2;

        const contractAddress = '0x1464D892F270D5746C3c12C6ED48f8DCdF3e673d';

        const contract = new ethers.Contract(contractAddress, abi, signer);
        const transaction = await contract.issueTickets(
          Typed.uint256(ticketId),
          Typed.address(to),
          Typed.uint256(quantity)
        );
      }
    };

    await issueTicket();
  };

  return { transferTicket };
};
