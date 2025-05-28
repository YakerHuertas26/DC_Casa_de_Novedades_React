import { create } from "zustand";
import { persist } from "zustand/middleware";

// stores complementarios
const useStore = create((set) => ({
    collapse: true,
    setCollapse: () => set((state) => ({ collapse: !state.collapse })),
}));



export default useStore;

// stores autentificación 
const useStoreAuth= create(persist( 
    (set) =>({
    isLoggedIn:false,
    user:null,
    login:(userData)=> set({isLoggedIn:true,user:userData}),
    logout:()=>{
                set({isLoggedIn:false,user:null})
                localStorage.clear();
            }
    }),

    {
        name:'auth-storage'
    }
));
export {useStoreAuth}