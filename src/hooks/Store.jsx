import { toast } from "sonner";
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
    selectOption:'',
    setSelectOption:(item)=>set({selectOption:item}),
    menuUser:false,
    setMenuUser:()=>set(state=>({menuUser:!state.menuUser})),
}));

// +++++++ store Mode +++++++
const useStoreMode= create((set) => ({
    mode: 'light',
    setMode: () => set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' }))
}));

// +++++ store autentificación +++++ 
const useStoreAuth= create(persist( 
    (set) =>({
    isLoggedIn:false,
    user:null,
    login:(userData)=> set({isLoggedIn:true,user:userData}),
    logout:()=>{
                set({isLoggedIn:false,user:null})
                localStorage.removeItem('auth-storage');;
            },
    forceLogout: (messaje) => {
        set({ isLoggedIn: false, user: null });
        localStorage.removeItem('auth-storage');
        toast.error(messaje);
    }}),

    {
        name:'auth-storage'
    }
));

const useModal = create((set)=>({
    modalCategory: false,
    setModalCategory: ()=> set((state)=>({modalCategory:!state.modalCategory}))
}));
export {useStoreAuth,useStoreDashboard,useStoreMode,useModal}