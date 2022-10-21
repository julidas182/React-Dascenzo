/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import ItemCount from '../../Components/ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList';

const productos = [
  {
      "id" : 200,
      "nombre" : "Mat de Yoga", 
      "descripcion" : "mat de yoga de 1.8m de goma espuma",
      "precio" : 3200,
      "tipo" : "elemento",
      "img" : "../../assets/imagenes-productos/elemento3-min.jpg"
  },
  {
      "id" : 201,
      "nombre" : "Calza para Yoga", 
      "descripcion" : "calza talle M",
      "precio" : 4300,
      "tipo" : "ropa",
      "img" : "../../assets/imagenes-productos/inducalza-min.jpg"
  },
  {
      "id" : 202,
      "nombre" : "Ladrillo de goma", 
      "descripcion" : "elemento ladrillo de goma",
      "precio" :  1600,
      "tipo" : "elemento",
      "img" : "../../assets/imagenes-productos/elemento2-min.jpg"
  },
  {
      "id" : 203,
      "nombre" : "Conjunto remera y calza", 
      "descripcion" : "remera y calza talle M",
      "precio" :  3600,
      "tipo" : "ropa",
      "img" : "../../assets/imagenes-productos/induconjunto-min.jpg"
  },
 {
      "id" : 204,
      "nombre" : "Rodillo",
      "descripcion" : "Rodillo tenturado de goma",
      "precio" :  1350,
      "tipo" : "elemento",
      "img" : "../../assets/imagenes-productos/elemento1-min.jpg"
  },
  {
      "id" : 205,
      "nombre" : "Ladrillo de color", 
      "descripcion" : "Ladrillo de distintos colores de 20x30x5cm",
      "precio" :  1850,
      "tipo" : "elemento",
      "img" : "../../assets/imagenes-productos/elemento2-min.jpg"
  },
  {
      "id" : 206,
      "nombre" : "Ladrillo macizo", 
      "descripcion" : "Ladrillo maziso sin color de 20x30x5cm",
      "precio" :  1500,
      "tipo" : "elemento",
      "img" : "../../assets/imagenes-productos/elemento4-min.jpg"  
  },
  {
      "id" : 207,
      "nombre" : "Almohadon y colchoneta", 
      "descripcion" : "Almohadon de meditacion y Colchoneta",
      "precio" :  3900,
      "tipo" : "elemento",
      "img" : "../../assets/imagenes-productos/elemento5-min.jpg"
  },
  {
      "id" : 208,
      "nombre" : "Cintas elasticas", 
      "descripcion" : "Cintas elasticas x 3 (distintos colores)",
      "precio" :  2100,
      "tipo" : "elemento",
      "img" : "../../assets/imagenes-productos/elemento-min.jpg"
  },
  {
      "id" : 209,
      "nombre" : "Aceite de Lavanda", 
      "descripcion" : "Extracto natural de Lavanda para aromaterapia",
      "precio" :  700,
      "tipo" : "aromas y mas",
      "img" : "../../assets/imagenes-productos/aromasaceite-min.jpg"
  },
  {
      "id" : 210,
      "nombre" : "Lampara de Sal", 
      "descripcion" : "lampara de sal 20cm de alto",
      "precio" :  3500,
      "tipo" : "aromas y mas",
      "img" : "../../assets/imagenes-productos/aromaslamparasal-min.jpg"
  },
  {
      "id" : 211,
      "nombre" : "Saumerios Incienso", 
      "descripcion" : "Saumerios x 20 unidades de Incienso",
      "precio" :  500,
      "tipo" : "aromas y mas",
      "img" : "../../assets/imagenes-productos/aromassaumerio-min.jpg"
  },
  {
      "id" : 212,
      "nombre" : "Saumo", 
      "descripcion" : "Saumo de Romero y Lavanda",
      "precio" :  700,
      "tipo" : "aromas y mas",
      "img" : "../../assets/imagenes-productos/aromassaumo-min.jpg"
  }

];

const obtenerProductos = new Promise ((resolve, reject)=> {
  resolve(productos)
})


const ItemListContainer = ({greeting}) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerProductos
    .then((data)=> {
      
      setProductsList(data)
    })
    .catch((error)=>{
      console.log('salio todo mal');
      
    })
    .finally(()=>
      setLoading(false)
    )

 
  }, []);

  


  const onAdd = (count) => {
    console.log(`quieres agregar ${count} productos`)
  }
  return (
    <>
    <h1>{greeting}</h1>
    {/* {
      productsList.map((producto)=> {
        return <h2 key={producto.id}>{productos.nombre}</h2>
        
        
      })
    } */}
    
    {<>{loading ? <h1>Cargando...</h1> : <ItemList products={productsList} />}</>}
    <ItemCount stock={5} initial={1} onAdd={onAdd}/> 
    </>
  )
}

export default ItemListContainer