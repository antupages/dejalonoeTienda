import React from 'react'
import ProductoCatalogo from './componentes/productoCatalogo'

function ItemList({producto}) {
  return (
    <div className='row' id="itemdetail">
        {
        producto.map(producto=>
            <div className="col-md-3" key={producto.id}>
                <ProductoCatalogo item={producto.id}/>  
            </div>
            )
        }
    </div>
  )
}

export default ItemList