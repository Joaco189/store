import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cart } from "../../contexts/Cart";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({producto}) => {
    const priceFormat = parseInt(producto.price).toLocaleString("es-ES", {style:"currency", currency:"ARS"})

    const {addProduct} = useContext(Cart)
    const [qty, setQty] = useState(0);

    const navigate = useNavigate()

    const purchase = (quantity) => {
        setQty(quantity)
        addProduct({...producto, quantity})
    }


    return (
        <div className="item-detail-container">
            <div className="item-detail-card">
                <div className="item-detail-info">
                    <h1>{producto.title}</h1>
                    <p>{producto.description}</p>
                </div>
                <div className="item-detail-image">
                    <img style={{width: "100%"}}src={producto.img} alt="" />
                </div>

                <div className="item-detail-price-container">
                    <div className="item-detail-price">
                        <span>{priceFormat}</span>
                    </div>
                    {qty ?
                    <button className="go-to-cart" onClick={() => navigate("/carrito")}>Ir al carrito</button>
                    :
                    <ItemCount onAdd={purchase} stock={10} initial={1}/>
                    }
                </div>

            </div>
        </div>
    )
}

export default ItemDetail