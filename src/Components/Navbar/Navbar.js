import React from 'react'
import logo2 from '../../assets/logo2.png'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
  return (
    <header style={style.container}>
      <img style={style.img} src={logo2} alt="logo de tienda online" />
      <h1 style={style.h1}>Soy Energia Yoga Tienda On-line</h1>
      <nav>
        <ul style={style.ul}>
          <li style={style.li}><a style={style.a} href="http://">Categorias</a></li>
          <li style={style.li}><a style={style.a} href="http://">Sobre Nosotros</a></li>
          <li style={style.li}><a style={style.a} href="http://">Locales</a></li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default Navbar

const style = {
  container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    backgroundColor: 'grey',
  },
  img:{
    height: '5rem',
    marginLeft: '5vh',
  },
  h1:{
    marginLeft: '15vh',
    fontWeight: '500',
    color: 'white',
  },
  li:{
    listStyle: 'none',
    margin: 15,
    color: 'white', 
  },
  
  ul:{
    display: 'flex',
  },

  a:{
    textDecoration: 'none',
    color: 'black',
  }


  
}








