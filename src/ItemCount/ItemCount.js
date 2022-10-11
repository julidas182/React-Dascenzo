import React, { useState, useEffect } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    useEffect(() => {}, [])
    
    
    const subtract = () => {
      if (count > initial){
        setCount(count - 1)
      } 
    }

    const add = () => {
      if (count < stock){
      setCount(count + 1)
      }
    }

  return (
    <div>
        <button onClick={subtract}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
        <button disabled={stock === 0} onClick={()=>onAdd(count)}>
          <span>{stock === 0 ? 'Producto sin stock' : 'Agregar al carrito'}</span>
        </button>
    </div>
  )
}

export default ItemCount