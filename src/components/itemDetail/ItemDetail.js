import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount'

export default function ItemDetail({item}) {

  const[habilitaCounter, setHabilitaCounter] = useState(true);

  function handleOnAdd(){
    setHabilitaCounter(false);
  }

  return (
    <div className='cont-detail'>

      <img className="img-detail" src={item.pictureUrl} />

      <div className='detail'>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>Precio: {item.price}</p>
        {
          habilitaCounter ?
            <ItemCount stock={4} initial= {0} onAdd={handleOnAdd} item={item}/>
          :
            <div>
              <Link to='/cart'><button>Termina tu compra</button></Link>
            </div>

        }
      </div>
    </div>
  )
}
