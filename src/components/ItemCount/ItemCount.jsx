import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({onAdd, stock, initial}) => {

    const [count, setCount] = useState(initial)

    const onDecrement = () => {
        if (count > initial) setCount(count - 1)
    }

    const onPlus = () =>{
        if (count < stock) setCount(count + 1)
    }

    return (
        <div className='item-count-container'>
            <div className='item-counter'>
                <button onClick={onDecrement}>-</button>
                <div>
                    <span>{count}</span>
                </div>
                <button onClick={onPlus}>+</button>
            </div>
            <div className='item-purchase'>
                <button onClick={()=>onAdd(count)}>Comprar</button>
            </div>
        </div>
    )
}

export default ItemCount