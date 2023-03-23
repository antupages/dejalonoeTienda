import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import merch from "./merch.json"
import ItemList from './ItemList';
//import Catalogo from "./componentes/catalogo"

function ItemListContainer() {
  const [producto, setProducto] = useState({})
  const {id} = useParams ();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(id ? merch.filter(producto => producto.nombre === id) : merch);
      }, 2000);
    });
    promesa.then((data) => {
      setProducto(data);
    });
  }, [id]);

  return (
    <>
     
    </>
  )
}

export default ItemListContainer;
// <ItemList item={producto}/> esto se inserta en la linea 26 pero uando esta insertado no funciona la pagina , no estoy pudiendo encontrar el problema 