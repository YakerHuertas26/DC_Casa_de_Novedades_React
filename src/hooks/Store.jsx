import { create} from "zustand";
import { persist } from "zustand/middleware";


const useStore = create((set) => ({ 
}));

export default useStore   

// ++++++ store Dashboard ++++++++
const useStoreDashboard = create((set) => ({
    selectedIndex:0,
    setSelectedIndex: (index) => set({ selectedIndex: index }),
    collapse: false,
    setCollapse: () => set((state) => ({ collapse: !state.collapse })),
}));

// +++++ store autentificación +++++ 
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
export {useStoreAuth,useStoreDashboard}