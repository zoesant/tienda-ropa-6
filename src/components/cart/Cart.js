import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCart from './ItemCart';

export default function Cart() {

  const context = useContext(CartContext);

  function limpiarCarrito(){
    context.clear();
  }

  function getTotalCarrito(){
    let precioFinal = 0;
    context.datosCarrito.map(element => {
        console.log( element.item.price);
        precioFinal += element.quantity * element.item.price;
    });
    return precioFinal;
  }

  return (
    <>
      <h1>Carrito</h1>
      {
              
        context.datosCarrito.length !== 0 ?
        <>
          <div><button onClick={limpiarCarrito}>Vaciar carrito</button></div>
          <ul className='lista'>
                {
                  context.datosCarrito.map((itemCarrito) => (
                        <ItemCart key={itemCarrito.item.id} cartItem={itemCarrito}></ItemCart>
                      )
                  )
                }
          </ul>  

          <h5>Total: {getTotalCarrito()}</h5>
        </>
        :
          <>
            <div>El carrito esta vacio</div>   
            <Link to='/'><button>Volver al inicio</button></Link> 
          </>  
      }  
    </>
  )
}
