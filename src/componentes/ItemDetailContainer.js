import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {db} from "./firebase/firebase"
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemList from './ItemList';
import ItemDetail from "./ItemDetail.js";


function ItemListContainer() {
  
  const [product, setData] = useState([]);
  const [detalleId] = useParams();

  
  useEffect(()=>{
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, "items", detalleId);
    getDoc(queryDoc)
    .then(res=>setData({id: res.id, ...res.data()}))

  }, [detalleId])
  
  
  return (

        <div>
          <ItemDetail data={product}/>
        </div>



  )
}

export default ItemListContainer;




/*import React from 'react'
import ProductoCatalogo from "./productoCatalogo.js"
function ItemDetailContainer() {
  return (
    <div>

      <ProductoCatalogo/>
      <button>sumar al carro</button>

    </div>
  )
}

export default ItemDetailContainer*/