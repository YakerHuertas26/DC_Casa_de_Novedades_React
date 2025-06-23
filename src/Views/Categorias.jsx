import { useShallow } from "zustand/shallow";
import { HeaderUItem } from "../_elements/HeaderItem";
import { ListCategories } from "../components/categories/ListaCategorias";
import { useModal } from "../hooks/Store";
import { CrearCategoria } from "../Layouts/categorias/CreateCategory";

const Categorias = () => {
    const modalCategory= useModal(useShallow(store=>store.modalCategory));
    const setModalCategory= useModal(useShallow(store=>store.setModalCategory));
    
    return ( 
        <>
            <HeaderUItem title='Categorías' modal={modalCategory} setModal={setModalCategory}/>
            <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
            <CrearCategoria/>
            <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
            
            {/* <ListCategories/> */}
        </>
    );
}      

export { Categorias };