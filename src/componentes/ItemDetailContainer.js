import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

function ItemDetailContainer() {

    const[data,setData]= useState('');
    const{detalleId}  = useParams();

    useEffect(()=>{
     const queryDb = getFirestore();
     const queryDoc = doc(queryDb, 'products', detalleId);
     getDoc(queryDoc)
     .then(res=>setData({id: res.id, ...res.data()}))
      },[detalleId])

    

  return (
    <div>
        <ItemDetail data ={data} />
    </div>
  )
}

export default ItemDetailContainer







/*import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { getProdcto } from 'firebase/firestore';
import ItemDetail from "./ItemDetail.js";


function ItemListContainer() {
 
  const [data, setData] = useState([]);
  const {id} = useParams();

  
  useEffect(()=>{
    getProdcto(id).then(prod => setData(prod))
  }, [])
  
  
  return (

        <div>
          <ItemDetail data={data}/>
        </div>



  )
}

export default ItemListContainer;

*/