import React, { useContext, useState } from "react";
import { Cart } from "../../contexts/Cart";
import CartItem from "../../components/CartItem/CartItem";
import "./CartContainer.css";
import Form from "../../components/Form/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContainer = () => {
    const { products, calculateTotalPrice } = useContext(Cart);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(!open)
    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="cart-container">
                <div className="cart-content">
                    {products.length === 0 ? (
                        <div className="noproducts-legend">
                            <h1>No hay productos</h1>
                        </div>
                    ) : (
                        <>
                            {products.map((product) => {
                                return (
                                    <CartItem key={product.id} item={product} />
                                );
                            })}
                        </>
                    )}
                </div>
                <div className="purchase-container">
                    <span>Total: {calculateTotalPrice()}</span>
                    <button
                        onClick={handleClose}
                        disabled={products.length === 0 ? true : false}
                    >
                        Comprar
                    </button>
                </div>
                {open && products.length !== 0 ? (
                    <Form products={products} total={calculateTotalPrice()} handleClose={handleClose}/>
                ) : null}
            </div>
        </>
    );
};

export default CartContainer;
