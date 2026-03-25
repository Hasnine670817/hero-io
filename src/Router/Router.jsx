import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
])

export default router;