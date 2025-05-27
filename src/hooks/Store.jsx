import { create } from "zustand";

// stores complementarios
const useStore = create((set) => ({
    collapse: true,
    setCollapse: () => set((state) => ({ collapse: !state.collapse })),
}));


// stores autentificación 
export default useStore;


const useStoreAuth= create((sert)=>{[

]});
export {useStoreAuth}