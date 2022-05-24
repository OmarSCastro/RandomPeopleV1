import React from 'react'
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';

// Utilizamos desestructuración para solo recibir los parametros del objeto
export const PersonItem = ( {nombre, edad, genero, ciudad, foto_url}) => {

 

  // Esta constante crea la imagen desde el url que manda las props
  const imagen = (<Avatar image={foto_url} className="mr-2" size="xlarge" shape="circle"/>) ;


  // Esta consante fondo define le clase del background que se le asignara a la card dependiendo de 
  // su genero, utilizando un operador
  const fondo = (genero==='female'? 'bg-pink-200 w-3' : 'bg-cyan-200 w-3');

    
  return (
    <div>
      
        <Card 
          // className= {"w-3 "}
          className = {fondo}
          // style={{ width: '12em', height: '19em' }} 
        >
          <div className='flex align-items-center justify-content-between'>

            {imagen}
            <h1 >{nombre}</h1>
            <h2>{edad}</h2>
            <h4>{ciudad}</h4>
          </div>
        </Card>
    
    </div>
  )
}

