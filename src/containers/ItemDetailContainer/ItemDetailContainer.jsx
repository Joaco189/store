import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';


const ItemDetailContainer = () => {

    const {itemId} = useParams()

    const [producto, setProducto] = useState({})

    useEffect(() => {
        (async () => {
            try {

                const docRef = doc(db, "products", itemId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProducto({...docSnap.data(), id: docSnap.id})
                } 
                
            } catch (error) {
                console.log(error)
            }
        })()
    }, [itemId])
    return <ItemDetail producto={producto}/>
}

export default ItemDetailContainer