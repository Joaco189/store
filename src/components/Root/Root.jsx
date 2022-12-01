import React from 'react'
import { Outlet } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import NavBar from '../NavBar/NavBar'


const Root = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <CartWidget/>
        </>
    )
}

export default Root