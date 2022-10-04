import React from 'react'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';



const App = () => {

  const mensaje = 'Cart de Producto'
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={mensaje}/>
      <ItemListContainer greeting={mensaje}/>
    </>
  )
}

export default App
