import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  isOpenModal: false,
  openModal: () => set((state) => ({ isOpenModal: !state.isOpenModal })),
  closeModal: () => set(() => ({ isOpenModal: false })),
  setUser: (newUser) => set(() => ({ user: newUser })),
}));

export default useStore;
