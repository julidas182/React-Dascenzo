import { Button } from '@mui/material'
import React from 'react'





const Item = ({ product}) => {
  return (
    <div>
        {<src>{product.img}</src>}
        {<h2>{product.nombre}</h2>}
        {<Button>Ver detalles</Button>}


    </div>
  )
}

export default Item