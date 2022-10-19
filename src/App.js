import React from 'react'
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';



const App = () => {

  const mensaje = 'Cart de Producto'
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={mensaje}/>
      
    </>
  )
}

export default App
