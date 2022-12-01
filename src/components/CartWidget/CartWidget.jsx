import React, { useContext } from 'react'
import "./CartWidget.css"
import cartIcon from "../../assets/cartIcon.png"
import { useNavigate } from 'react-router-dom'
import { Cart } from "../../contexts/Cart";

const CartWidget = () => {

    const navigate = useNavigate()

    const {calculateTotalItems} = useContext(Cart)

    return (
        <div className="cart-icon-container" onClick={() => navigate("/carrito")}>
            <span>{calculateTotalItems() === 0 ? null : `${calculateTotalItems()}`}</span>
            <img src={cartIcon} alt="Cart Icon" />
        </div>
    )
}

export default CartWidget