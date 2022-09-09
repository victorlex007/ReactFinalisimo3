import { Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList";
import ItemDetail from "../ItemDetail/ItemDetail";
import Item from "../Item/Item"



function ItemListContainer({saludo}) {
const [items, setItems] = useState({});



useEffect(() => {
  let productos =[{id: 2, nombre: "CHORIZOS", precio: 1600, descripcion: "Jugoso pieza de carne con marmolado unico", img : "https://gastronomiaycia.republica.com/wp-content/uploads/2018/12/carne_wagyu_cultivo.jpg.ico"},
  {id: 3, nombre: "VACIO", precio: 3100, descripcion: "Jugoso pieza de carne con marmolado unico"},
  {id: 4, nombre: "LOMO",precio: 2600, descripcion: "Jugoso pieza de carne con marmolado unico" },
  {id: 5, nombre: "TOMAHAWK",precio: 2400, descripcion: "Jugoso pieza de carne con marmolado unico" },
  {id: 6, nombre: "T-BONE",precio: 2500, descripcion: "Jugoso pieza de carne con marmolado unico" }
];
new Promise((resolve) => {
  setTimeout(()=>{
    resolve(productos);
  }, 2000)

}).then((data)=>{
  setItems(data);
    })
}, [])

return (

 <div>
    <span>saludo</span>
    {items.length ?
    <ItemList items={items}/> :
     <Spinner></Spinner>
    }
 </div>
  )
}
export {ItemListContainer};