import React, { useContext } from "react";
import { Cart } from "../../contexts/Cart";
import "./CartItem.css";

const CartItem = ({ item }) => {
    const { removeProduct } = useContext(Cart);

    const priceFormat = parseInt(item.price).toLocaleString("es-ES", {
        style: "currency",
        currency: "ARS",
    });

    return (
        <div className="cart-item-container">
            <div className="cart-item-detail">
                <div className="cart-item-img">
                    <img src={item.img} alt="" />
                </div>
                <div className="cart-item-title">
                    <h1>{item.title}</h1>
                </div>
                <div className="cart-item-price-qty">
                    <h2>{priceFormat}</h2>
                    <p>Cantidad: {item.quantity}</p>
                </div>
            </div>
            <div className="cart-item-remove">
                <button onClick={() => removeProduct(item.id)}>X</button>
            </div>
        </div>
    );
};

export default CartItem;
