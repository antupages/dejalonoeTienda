import React from 'react';
import {useState} from 'react'

function ItemCount({stock,initial, onAdd}) {
    const[counter, setCounter] = useState(initial)

    const restar=()=>{
      if(counter > 1){
        setCounter(counter - 1);
      }
    };

    const sumar=()=>{
      if(counter < stock){
        setCounter(counter + 1);
      }
    };


  return (
    <div className='counter'>
        <button className='resta' disabled={counter<1} onClick={restar}>-</button>
        <span>
            {counter}
        </span>
        <button className='suma' disabled={counter>= stock} onClick={sumar}>+</button>
         <div>
         <button className='agregarCarrito' disabled={stock<=0} onClick={()=> onAdd(counter)}>Agregar al carrito</button>
         </div>
    </div>
  )
}

export default ItemCount;