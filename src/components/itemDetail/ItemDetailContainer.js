import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {itemsDB} from '../../data/ItemsDB'
import { Spinner } from 'reactstrap';

import './ItemDetail.css'



export default function ItemDetailContainer(props) {

    const [item, setItem] = useState(undefined);
    const {id} = useParams();

    const obtenerItem= (idItem) =>{
        console.log('In params: ', idItem);

        return new Promise ((resolve, reject)=>{
            console.log('In params: ', idItem);
            const itemDevuelto = itemsDB.find((elemento)=>elemento.id===idItem)
            setTimeout(()=>{
                    resolve(itemDevuelto);
            },2000)
        })
    }

    useEffect(async () => {
        setItem(await obtenerItem(id));
    },[id]); //cada vez que cambie el parametro id se va  aejecutar el useEffect

    return (
        <>
        {
            item ? 
            <>
                <h1> {props.title} </h1>
                <ItemDetail item={item}/>
            </>
            :
            <div className='cont-spinner'>
                <Spinner className='spinner' color='primary'/> 
            </div>
            
        }
            
        </>
    )
}
