import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {

  const onAdd = (count) => {
    console.log(`quieres agregar ${count} productos`)
  }
  return (
    <>
    <h1>{greeting}</h1>
    <ItemCount stock={5} initial={1} onAdd={onAdd}/> 
    </>
  )
}

export default ItemListContainer