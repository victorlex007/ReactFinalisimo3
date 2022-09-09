import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {ItemDetail} from "../ItemDetail/ItemDetail";


export function ItemDetailContainer () {
  const {id}= useParams ();
  const [item, setItem] = useState ({});
  useEffect(()=> {
    let productos =[{id: 2, nombre: "CHORIZOS", precio: 1600, descripcion: "Jugoso pieza de carne con marmolado unico"},
    {id: 3, nombre: "VACIO", precio: 3100, descripcion: "Jugoso pieza de carne con marmolado unico"},
    {id: 4, nombre: "LOMO",precio: 2600, descripcion: "Jugoso pieza de carne con marmolado unico" },
    {id: 5, nombre: "TOMAHAWK",precio: 2400, descripcion: "Jugoso pieza de carne con marmolado unico" },
    {id: 6, nombre: "T-BONE",precio: 2500, descripcion: "Jugoso pieza de carne con marmolado unico" }
  ];
  new Promise((resolve) => {
    setTimeout(()=>{
      resolve(productos.find((element)=>element.id === id));
    }, 2000)
     
  }).then((productos)=>{

  })
  setItem(productos);
  }, [id])
  return (
    <>
    <ItemDetail item={item}/>
    </>
  )
}
