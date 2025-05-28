import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import { AuthLayout } from "../Layouts/AuthLayout";
import { Login } from "../Views/Login";
import { Dashboard } from "../Layouts/Dashboard";
import { Counter } from "../Views/prueba";
import { DashboardVendedor } from "../Layouts/DashboardVendedor";
import { useStoreAuth } from "../hooks/Store";

// rutas protegidas
const ProtectedRoute = ({ children, allowedRoles }) => {
    const { isLoggedIn, user } = useStoreAuth(); 

        if (!isLoggedIn) return <Navigate to="/login" />;

        if (!allowedRoles.includes(user.role)) {
        const redirectUrl = user.role === 'admin' ? '/dashboard' : '/dashboardVendedor';
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
        path:'/dashboard',
        element:(<ProtectedRoute allowedRoles={['admin']} > <Dashboard/></ProtectedRoute>)
    },
    {
        path:'/dashboardVendedor',
        element:(<ProtectedRoute allowedRoles={['vendedor']}  > <DashboardVendedor/></ProtectedRoute>)
    },
    {
        path:'/prueba',
        element:<Counter/>  
    }
])
export default route;