import {useContext} from 'react'
import { Link } from 'react-router-dom'
import  {useCartContext}  from './CartContext'

function Item({info}) {

 const nombre = useContext(useCartContext);

  return (
    <div>
      <Link to={`/ItemDetail/${info.id}`} className='producto'>
        <p>{info.title} </p>
        <br/> 
        <img src={info.img} width='300px' height='300px' alt='imgitem'/>
      </Link>
      
      
    </div>
  )
}

export default Item