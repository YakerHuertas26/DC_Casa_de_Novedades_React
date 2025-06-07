import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import { AuthLayout } from "../Layouts/AuthLayout";
import { Login } from "../Views/Login";
import { Dashboard } from "../Views/Dashboard";
import { DashboardVendedor } from "../Layouts/DashboardVendedor";
import { useStoreAuth } from "../hooks/Store";
import { Perfil } from "../Views/Perfil";
import { Vendedores } from "../components/Vendedores";
import { Categorias } from "../Views/Categorias";

// rutas protegidas
const ProtectedRoute = ({ children, allowedRoles }) => {
    const { isLoggedIn, user } = useStoreAuth(); 

        if (!isLoggedIn) return <Navigate to="/login" />;
        
        if (allowedRoles!==user.role) {
            const redirectUrl = user.role === 'admin' ? '/admin' : '/dashboardVendedor';
            return <Navigate to={redirectUrl} replace />;
        }
  return children; // Renderiza el componente hijo si todo está OK
};

const route= createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/login',
        element:<AuthLayout/>,
        children:[
            {
                index:true,
                element:<Login/>
            }
        ]
    },
    {
        path:'admin',
        element:(<ProtectedRoute allowedRoles={'admin'} ><Dashboard/></ProtectedRoute>),
        children:[
            {
                path:'/admin/perfil',
                element:<Perfil/>
            },
            {
                path:'/admin/vendedores',
                element:<Vendedores/>
            },
            {
                path:'/admin/categoria',
                element:<Categorias/>
            }
        ]
    },
    {
        path:'/dashboardVendedor',
        element:(<ProtectedRoute allowedRoles={'vendedor'}  > <DashboardVendedor/></ProtectedRoute>)
    }
    
])
export default route;