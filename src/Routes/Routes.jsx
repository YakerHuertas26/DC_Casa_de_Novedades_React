import { createBrowserRouter } from "react-router";
import App from "../App";
import { AuthLayout } from "../Layouts/AuthLayout";
import { Login } from "../Views/Login";
import { Dashboard } from "../Layouts/dashborad";
import SidebarLayout from "../Layouts/Prueba";


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
        element:<Dashboard/>
    },
    {
        path:'/prueba',
        element:<SidebarLayout/>
    }
])
export default route;