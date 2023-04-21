import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from './ItemList';

function ItemListContainer() {
  
  const [data, setData] = useState([]);
  const {categoryid}  = useParams();
  
  useEffect(()=>{
    const queryDb = getFirestore();
    const queryColection = collection(queryDb, "items");
    
    if(categoryid){
      const queryFilter = query(queryColection, where("CategoryID", "==", categoryid))
      getDocs(queryFilter)
      .then(res=>setData(res.docs.map(p=>({id: p.id, ...p.data()}))))
    }else{
      getDocs(queryColection)
      .then(res=>setData(res.docs.map(p=>({id: p.id, ...p.data()}))))
    }
    }, [categoryid])
  
  
  return ( <ItemList data={data}/> )
};

export default ItemListContainer;
