import "./ItemListContainer.css"
import ItemList from "../../components/ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {

    const {category} = useParams()

    const [productos, setProductos] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const q = query(collection(db, "products"));
                const querySnapshot = await getDocs(q);
                const dbFirestore = []
                querySnapshot.forEach((doc) => {
                    dbFirestore.push({...doc.data(), id: doc.id})
                });

                if (category === "mouse"){
                    const q = query(collection(db, "products"), where("category", "==", "mouse"));
                    const querySnapshot = await getDocs(q);
                    const dbFirestoreFilter = []
                    querySnapshot.forEach((doc) => {
                        dbFirestoreFilter.push({...doc.data(), id: doc.id})
                    });
                    setProductos(dbFirestoreFilter)
                } else if (category === "teclados"){
                    const q = query(collection(db, "products"), where("category", "==", "teclados"));
                    const querySnapshot = await getDocs(q);
                    const dbFirestoreFilter = []
                    querySnapshot.forEach((doc) => {
                        dbFirestoreFilter.push({...doc.data(), id: doc.id})
                    });
                    setProductos(dbFirestoreFilter)
                } else {
                    setProductos(dbFirestore)
                }
            } catch (error) {
                console.log(error)
            }
        })()
    }, [category])
    
    return (
        <div className="item-list-container">
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer