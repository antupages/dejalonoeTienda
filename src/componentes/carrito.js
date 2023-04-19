import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Carrito =()=> {
    const[cuantity, setCuantity] = useState(0)
    return(
        <div>
            <Link to={"/Cart"}>
                <button type='button' className='btn colorCartButton position-relative'>
                    <img src={"/img/cart.svg"} alt={"carrito"} width={20} />
                    <span className='position-absolute top-0 start-100 trasparente-middle badge ronded-pill bg-danger'>{cuantity}</span>
                </button>
            </Link>
        </div>
    )
}
export default Carrito