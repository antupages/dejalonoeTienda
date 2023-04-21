import React from 'react'
import Item from './Item'


function ItemList({data=[]}) {
  return (
  
      data.map(p=> 
        <div className='col-md-3' key={data.id}>
          <Item key={data.id} info={data} />
        </div>
      )
      
  )
}

export default ItemList
