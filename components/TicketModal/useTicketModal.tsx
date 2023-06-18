export const useTickeModal = () => {
  const openTicketCompleModal = () => {
    window.my_modal_3.showModal();
  };

  const makeTicket = async () => {
    // TODO:スマコンと通信してチケットを作成する処理を書く
  };

  const clickHandler = async () => {
    await makeTicket();
    openTicketCompleModal();
  };
  return { clickHandler };
};
