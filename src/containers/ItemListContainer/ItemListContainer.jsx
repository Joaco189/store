import "./ItemListContainer.css"
import ItemList from "../../components/ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const {category} = useParams()

    const [productos, setProductos] = useState([])
    useEffect(() => {
        (async () => {
            try {
                let response = await fetch("/products.json");
                let data = await response.json();
                if (category === "mouse"){
                    const mouseProducts = data.filter(product => product.category === "mouse")
                    setProductos(mouseProducts)
                } else if (category === "teclados"){
                    const tecladoProducts = data.filter(product => product.category === "teclados")
                    setProductos(tecladoProducts)
                } else {
                    setProductos(data)
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