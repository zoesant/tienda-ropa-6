import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function Item({item}) {
    return (
    <li key={item.id} >
        <img className="img-item" src={item.pictureUrl} />
        <h5>{item.title}</h5>
        <p>{item.price}</p>
        <Link to={`/item/${item.id}`}>
            <button>Ver Detalle</button>
        </Link>
    </li>
    );
}

export default Item;