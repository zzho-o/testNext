export type UserState = {
  name: string;
  position: string;
  signout: () => void;
};

export type ModalState = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};
