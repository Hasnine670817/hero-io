import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";


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
                path: "/apps",
                element: <Apps></Apps>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
])

export default router;