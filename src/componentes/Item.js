import {useContext} from 'react'
import { Link } from 'react-router-dom'
import  {useCartContext}  from './CartContext'

function Item({info}) {

 //const nombre = useContext(useCartContext);

  return (
    <div>
     <Link to={`/item/${info.id}`} className='producto'>
        <img src={info.img} width='300px' height='300px' alt='imgitem'/>
     </Link>
    <p>{info.title} </p>
    <br/> 
    </div>
    

  )
}

export default Item