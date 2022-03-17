import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function ItemCart({cartItem}) {

const context = useContext(CartContext);

function eliminarDeCarrito(){
    context.removeItem(cartItem.item.id);
}
  return (
        <li key={cartItem.item.id} >
            <div>
                <button onClick={eliminarDeCarrito} className='btn-cerrar'>x</button>
            </div>
            <img className="img-item" src={cartItem.item.pictureUrl} />
            <h5>{cartItem.item.title}</h5>
            <p>{cartItem.item.price}</p>
            <p>Cantidad: {cartItem.quantity} </p>
            <Link to={`/item/${cartItem.item.id}`}>
                <button>Ver Detalle</button>
            </Link>
        </li>
        );
}
