import React, {useState} from 'react'
import ProductoCatalogo from '../componentes/productoCatalogo.js';
 
const Catalogo=(producto)=> {

    return (
      <div className="mainmerch" id="itemdetail">
           {producto.map((producto)=>{ 
                return( 
                    <ProductoCatalogo 
                      key={producto.id}
                      nombre={producto.nombre}
                      img={producto.img}
                      alt={producto.alt}
                      detalle={producto.detalle}
                    />
                );
            }
            )}
      </div>
    );
  };

export default Catalogo;
