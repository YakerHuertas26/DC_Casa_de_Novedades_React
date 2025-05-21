import { createBrowserRouter } from "react-router";
import App from "../App";
import { AuthLayout } from "../Layouts/AuthLayout";
import { Login } from "../Views/Login";
import { Dashboard } from "../Layouts/dashborad";
import { Counter } from "../Views/prueba";

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
        element:<Counter/>  
    }
])
export default route;