import { useNavigate } from "react-router-dom"
import "./Item.css"

const Item = ({producto}) => {

    const priceFormat = parseInt(producto.price).toLocaleString("es-ES", {style:"currency", currency:"ARS"})

    const navigate = useNavigate()
    
    const navigateDetail = () => {
        navigate(`/detail/${producto.id}`)
    }

    return (
        <div onClick={navigateDetail} className="item-container">
            <div className="item-img-container">
                <img src={producto.img} alt={producto.title} />
            </div>
            <div className="item-info">
                <h3>{producto.title}</h3>
                <p>{producto.description}</p>
                <span>{priceFormat}</span>
            </div>
        </div>
    )
}

export default Item