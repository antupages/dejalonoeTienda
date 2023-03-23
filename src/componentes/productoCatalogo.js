import React from 'react'

const productoCatalogo = (props) => {
  return (
    <div>
        <img src={props.img} alt={props.alt}/><p>{props.detalle}</p>
    </div>
  )
}

export default productoCatalogo