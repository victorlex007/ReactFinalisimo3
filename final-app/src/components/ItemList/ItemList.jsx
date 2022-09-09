import React from 'react'
import Item from "../Item/Item";


const ItemList = ({items}) => {
  return (
    <>
    {items.map((item, indx)=>
    <Item key={item.id +"" + indx} id={item.id}  nombre={item.nombre} precio={item.precio} descripcion={item.descripcion}/>)}
    </>
  );
}

export default ItemList;