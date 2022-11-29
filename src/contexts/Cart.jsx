import { createContext, useState } from "react";

export const Cart = createContext({});

const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const isInCart = (id) => {
        return products.find((product) => product.id === id);
    };

    const addProduct = (newProduct) => {
        const repeated = isInCart(newProduct.id);

        if (repeated) {
            repeated.quantity += newProduct.quantity;
            const cartWRepeated = products.filter(
                (productInCart) => productInCart.id !== newProduct.id
            );
            setProducts([...cartWRepeated, repeated]);
        } else {
            setProducts([...products, newProduct]);
        }
    };

    const removeProduct = (id) => {
        const cartProducts = products.filter(
            (productInCart) => productInCart.id !== id
        );
        setProducts(cartProducts);
    };

    const emptyCart = () => {
        setProducts([]);
    };

    const calculateTotalPrice = () => {
        const total = products.reduce(
            (acc, product) =>
                (acc += product.quantity * product.price),
            0
        );
        const priceFormat = parseInt(total).toLocaleString("es-ES", {style:"currency", currency:"ARS"})
        return priceFormat;
    };

    const calculateTotalItems = () => {
        let totalItems = 0;
        products.forEach((product) => {
            totalItems += product.quantity;
        });
        return totalItems;
    };

    return (
        <Cart.Provider
            value={{
                products,
                addProduct,
                removeProduct,
                emptyCart,
                calculateTotalPrice,
                calculateTotalItems,
            }}
        >
            {children}
        </Cart.Provider>
    );
};

export default CartProvider;
