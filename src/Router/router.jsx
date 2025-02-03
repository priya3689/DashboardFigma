import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import { lazy } from "react";

const Page1 = lazy(()=>import("../Pages/Page1"))
const DefaultDashboard = lazy(()=>import("../Pages/DefaultDashboard"));
const router = createBrowserRouter([
{   path:'/',
    element:<Home/>,
    children: [
        { index: true, element: <DefaultDashboard /> },
        { path: "/Page1",
          element:<Page1/>
         }
       
      ],
}
]);
export default router;