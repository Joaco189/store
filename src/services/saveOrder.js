import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const saveOrder = async (buyer, products, total, handleClose) => {
    try {
        const generatedOrder = {
            buyer: buyer,
            products: products,
            total: total,
            created: new Date().toLocaleString(),
        };

        const productOutOfStock = [];
        const productsInFirebase = [];
        for (const cartProduct of products) {
            const docRef = doc(db, "products", cartProduct.id);
            const docSnap = await getDoc(docRef);
            const productInFirebase = { ...docSnap.data(), id: docSnap.id };
            productsInFirebase.push(productInFirebase);
            if (cartProduct.quantity > productInFirebase.quantity)
                productOutOfStock.push(cartProduct);
        }

        if (productOutOfStock.length === 0) {
            for (const cartProduct of products) {
                const productInFirebase = productsInFirebase.find(
                    (product) => product.id === cartProduct.id
                );
                const productRef = doc(db, "products", cartProduct.id);
                await updateDoc(productRef, {
                    quantity: productInFirebase.quantity - cartProduct.quantity,
                });
            }

            const docRef = await addDoc(
                collection(db, "orders"),
                generatedOrder
            );

            toast.success(
                `Su orden se genero correctamente con el ID: ${docRef.id}`,
                {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            );
            handleClose();
        } else {
            for (const product of productOutOfStock) {
                const productInFirebase = productsInFirebase.find(
                    (productFirebase) => productFirebase.id === product.id
                );
                toast.error(`El producto "${product.title}" no tiene stock suficiente, stock disponible: ${productInFirebase.quantity}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            handleClose();
        }
    } catch (error) {
        console.log(error);
    }
};
