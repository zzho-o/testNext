import { create } from "zustand";

import type { ModalState, UserState } from "./type";

export const useUserStore = create<UserState>((set) => ({
  name: "홍길동",
  position: "학습자",
  signout: () => set({ name: "", position: "" }),
}));

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
