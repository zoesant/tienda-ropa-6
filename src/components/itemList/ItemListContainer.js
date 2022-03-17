import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './ItemList.css'
import {itemsDB} from '../../data/ItemsDB'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';



function ItemListContainer(props) {

    const[items,setItems] = useState([]);
    const {categoryId} = useParams();

    const obtenerItemsPorCategoria = (id) =>{
        return new Promise ((resolve, reject)=>{
            let itemsObtendos = itemsDB;
            setItems([]);
            if(id){
                itemsObtendos = itemsObtendos.filter((elemento)=>elemento.categoryId===id) 
            }
            setTimeout(()=>{
                resolve(itemsObtendos);
            },2000)

        })
    }

    useEffect(async () => {
         setItems(await obtenerItemsPorCategoria(categoryId)); 
    },[categoryId]);

    return (
    <>

        {
            items.length?
            <>
                <h1> {props.title} </h1>
                <div>
                    <ItemList
                        items={items}/>
                </div> 
            </>
            :
            <div className='cont-spinner'>
                <Spinner className='spinner' color='primary'/> 
            </div>
        }   
    </>
    
    );
}

export default ItemListContainer;

//   read:
//   {
//     values:
//     [
//       magnitude: number, // Ver tabla de magnitudes al final del archivo
//       value: number, // Valor de la magnitud
//       mantissa: number, //Entero indicando los dígitos del valor
//       exponent:  number, //Entero indicando la cantidad de dígitos decimales en la mantisa
//     ]
//   }
