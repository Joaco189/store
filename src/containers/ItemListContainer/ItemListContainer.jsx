import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import MoonLoader from "react-spinners/MoonLoader";

const ItemListContainer = () => {
    const { category } = useParams();

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const q = query(collection(db, "products"));
                const querySnapshot = await getDocs(q);
                const dbFirestore = [];
                querySnapshot.forEach((doc) => {
                    dbFirestore.push({ ...doc.data(), id: doc.id });
                });

                if (category === "mouse") {
                    const q = query(
                        collection(db, "products"),
                        where("category", "==", "mouse")
                    );
                    const querySnapshot = await getDocs(q);
                    const dbFirestoreFilter = [];
                    querySnapshot.forEach((doc) => {
                        dbFirestoreFilter.push({ ...doc.data(), id: doc.id });
                    });
                    setProductos(dbFirestoreFilter);
                } else if (category === "teclados") {
                    const q = query(
                        collection(db, "products"),
                        where("category", "==", "teclados")
                    );
                    const querySnapshot = await getDocs(q);
                    const dbFirestoreFilter = [];
                    querySnapshot.forEach((doc) => {
                        dbFirestoreFilter.push({ ...doc.data(), id: doc.id });
                    });
                    setProductos(dbFirestoreFilter);
                } else {
                    setProductos(dbFirestore);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [category]);

    return (
        <div className="item-list-container">
            {loading ? (
                <MoonLoader color="#fff" size={55} speedMultiplier={0.8} />
            ) : (
                <ItemList productos={productos} />
            )}
        </div>
    );
};

export default ItemListContainer;
