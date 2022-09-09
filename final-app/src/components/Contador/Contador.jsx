import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export const Contador = ({ stock, inicial = 1, onAdd }) => {
    const [contador, setContador] = useState(0);
    
    const aumentarContador = () => {
        if (contador < stock) setContador(contador + 1);
    };

  return (
    <><Button onClick={()=> {setContador(contador -1)}} disabled={contador === inicial}  size='md'
    height='48px'
    width='50px'
    borderColor='lightGrey.500'> - </Button>
        <span  width='10px'>{contador}</span>
        <Button onClick={aumentarContador}size='md'
    height='48px'
    width='50px'
    borderColor='grey.500'>+</Button>
        <div><Button disabled={contador === 0} onClick={()=>onAdd(contador)}width='120px' border='1px'>¡Agregar al Cart!</Button></div></>
  )
};
