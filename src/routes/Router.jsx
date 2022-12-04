import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from '../components/Home/Home';
import Root from '../components/Root/Root';
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer';
import CartContainer from '../containers/CartContainer/CartContainer';
import Contact from '../components/Contact/Contact';

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
                    element: <ItemListContainer/>
                },
                {
                    path: "/category/:category",
                    element: <ItemListContainer/>
                },
                {
                    path: "/detail/:itemId",
                    element: <ItemDetailContainer/>
                },
                {
                    path: "/contacto",
                    element: <Contact/>
                },
                {
                    path: "/carrito",
                    element: <CartContainer/>
                }
            ],
        },
    ]);

export const Router = () => {
    return <RouterProvider router={router} />
}

export default Router