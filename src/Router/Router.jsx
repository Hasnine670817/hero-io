import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";
import AppDetails from "../Pages/AppDetails";
import Installation from "../Pages/Installation";


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
                path: "/app/:id",
                element: <AppDetails></AppDetails>
            },
            {
                path: "/installation",
                element: <Installation></Installation>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
])

export default router;