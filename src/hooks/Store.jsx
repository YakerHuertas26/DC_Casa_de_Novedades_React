import { create } from "zustand";

const useStore = create((set) => ({
    collapse: true,
    setCollapse: () => set((state) => ({ collapse: !state.collapse })),
}))


export default useStore;
