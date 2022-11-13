import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const {itemId} = useParams()

    const [producto, setProducto] = useState({})

    useEffect(() => {
        (async () => {
            try {
                let response = await fetch('/products.json');
                let data = await response.json();
                const filter = data.find(producto => producto.id === itemId)
                setProducto(filter)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [itemId])
    return <ItemDetail producto={producto}/>
}

export default ItemDetailContainer