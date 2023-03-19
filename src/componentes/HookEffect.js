import { useState, useEf, useEffect } from "react";


export default function HookEffect(){

    const[usuario, setUsuario] = useState([]);
    
    const obtenerDatos = async()=>{
        const data = await fetch ("https://jsonplaceholder.typicode.com/users")
        const users = await data.json();
        setUsuario(users);
    }


    useEffect(()=>{
        obtenerDatos();
    },[])



    return(
        <div>

            <h1>los usuarios son: </h1>
            <ul>
                {usuario.map(item =>(<li key={item.id}><p>{item.id} - {item.name} - {item.email} </p></li>) ) }


            </ul>


        </div>
    )
}
