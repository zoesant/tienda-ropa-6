import React, { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


function CartWidget() {

    const context = useContext(CartContext);

    function getQuantityItems(){
        let quantityItemsCart = 0;
        context.datosCarrito.map(element => {
            quantityItemsCart += element.quantity;
        });
        return quantityItemsCart;
    }

    return(
        getQuantityItems() > 0?
            <div>
                <Link to='/cart'>
                    <img className="cart" src={require('../../Assets/carro.png')} id='cart'/>
                    <p>{getQuantityItems()}</p>
                </Link>
            </div>
        :
            <>
            {console.log('ITEMS',context.datosCarrito)}
            </>
        
    )
}





export default CartWidget;
