import React, {useState} from 'react'
import ProductoCatalogo from '../componentes/productoCatalogo.js';
 
const Catalogo=()=> {
    const [product, setProduct] = useState([
      {
        id: 1,
        nombre: "remera 1",
        detalle: "remera [1]",
        img: "#",
        alt: "alt remera 1",
      },
      {
        id: 2,
        nombre: "remera 2",
        detalle: "remera [2]",
        img: "#",
        alt: "alt remera 2",
      },
      {
        id: 3,
        nombre: "remera 3",
        detalle: "remera [3]",
        img: "#",
        alt: "alt remera 3",
      },
      {
        id: 4,
        nombre: "set de calcomanias",
        detalle: "set de calcomanias de la banda",
        img: "#",
        alt: "set de calcomanias de la banda",
      },
    ]);
  
    return (
      <div className="mainmerch">
        
           {product.map((producto)=>{ 
                return( 
                    <ProductoCatalogo 
                        
                        key={producto.id}
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

/*

export default Catalogo;


<div><img src="" alt=""/><p></p></div>


{product.map((producto) => (
    <div key={producto.id}>
      <h2>{producto.nombre}</h2>
      <p>{producto.detalle}</p>
      <img src={producto.img} alt={producto.alt} />
    </div>
  ))}


  */