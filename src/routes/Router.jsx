import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from '../components/Home/Home';
import Root from '../components/Root/Root';

const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <h1>Error</h1>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/productos",
                    element: <h1>Error</h1>
                },
                {
                    path: "/category/:category",
                    element: <h1>Error</h1>
                },
                {
                    path: "/detail/:itemId",
                    element: <h1>Error</h1>
                },
                {
                    path: "/contacto",
                    element: <h1>Error</h1>
                },
                {
                    path: "/sobrenosotros",
                    element: <h1>Error</h1>
                }
            ],
        },
    ]);

export const Router = () => {
    return <RouterProvider router={router} />
}

export default Router