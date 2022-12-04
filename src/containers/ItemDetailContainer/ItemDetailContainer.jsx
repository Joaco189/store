import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./ItemDetailContainer.css";
import MoonLoader from "react-spinners/MoonLoader";

const ItemDetailContainer = () => {
    const { itemId } = useParams();

    const navigate = useNavigate();
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const docRef = doc(db, "products", itemId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProducto({ ...docSnap.data(), id: docSnap.id });
                } else {
                    navigate("/404");
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [itemId]);
    return (
        <div className="item-detail-container">
            {loading ? (
                <MoonLoader color="#fff" size={55} speedMultiplier={0.8} />
            ) : (
                <ItemDetail producto={producto} />
            )}
        </div>
    );
};

export default ItemDetailContainer;
