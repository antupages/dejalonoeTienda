import React from 'react'
import { Link } from 'react-router-dom';


const ProductoCatalogo = (props) => {

  return (
    <div>
        <img src={props.img} alt={props.alt}/>
        <Link to={"ItemDetailContainer/id"} className="nav-Link btn btn-danger"><h2>{props.nombre}</h2></Link>
        <p>{props.detalle}</p>

    </div>
  )
}
export default ProductoCatalogo;