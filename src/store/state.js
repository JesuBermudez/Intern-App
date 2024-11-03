import { create } from "zustand";

const useStore = create((set) => ({
  user:null,
  isOpenModal: false,
  openModal: () => set((state) => ({ isOpenModal: !state.isOpenModal })), 
  setUser: (newUser) => set(() => ({ user: newUser })),
}));


export default useStore;
