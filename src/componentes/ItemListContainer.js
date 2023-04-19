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
  
  
  return (
      <ItemList data={data}/>
  )
};

export default ItemListContainer;


/*  

  const getProducts =  async ()=>{
    try{
      const querySnapshot = await getDocs(collection(db, "items"))
      const docs = []
      querySnapshot.forEach((doc)=>{
        docs.push({...doc.data(), id:doc.id})
      })
      setProducts(docs)
    }catch(error){
        console.log(error)
    }
  }
  getProducts()
  }, [product])



-----------------------

<div className='container card'>
      <div className='card-body'>
        {product.map(p =>(
          <div key={p.id}>
            <p>title: {p.title}</p>
            <p>description: {p.description}</p>
            <p>precio: {p.price}</p>
            <p>stock: {p.stock}</p>
            <p>CategoryID: {p.CategoryID}</p>
            <img src={p.img} alt={p.alt}/>
          </div>
        ))}
      </div>
    </div>

  */