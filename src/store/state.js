import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  setUser: (newUser) => set(() => ({ user: newUser })),
  isOpenModal: false,
  openModal: () => set((state) => ({ isOpenModal: !state.isOpenModal })),
  closeModal: () => set(() => ({ isOpenModal: false })),
  chat: {},
  setChat: (newChat) => set(() => ({ chat: newChat })),
}));

export default useStore;
