import { useState } from "react";


export default function Hook(){
    const[contador, setContador]= useState(0);
    
    // auto 

    const[auto, setAuto]= useState(false);

    
    const sumar=()=> setContador(contador+1);

    const restar=()=> setContador(contador-1);
    
    const llave =()=> setAuto(!auto);
    
    
    return(
        <div>
            <h1>contador hook</h1>
            <h1>mi contador esta en :{contador}</h1>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <br/>
            <h1>el auto</h1>
            <p>el auto esta:{auto ? "encendido" : "apagado" }</p>
            <button onClick={llave}>llave</button>
        </div>
    )
        
}

