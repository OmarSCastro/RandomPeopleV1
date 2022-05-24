import React, {useState, useEffect } from 'react'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';

import { AddPerson } from './components/AddPerson';
import { PersonItem } from './components/PersonItem';

export const RandomPeople = () => {

    // Utilizamos el hook useState para almacenar a las personas que nos vaya
    // arrojando la API
    const [people, setPeople] = useState( [''] );

  return (
    <>
        <h1>Random People</h1>

        {/* Se llama al componente AddPerson que es el boton, el cual tendra la posibilidad de manejar
        el hook desde setPeople y almacenar los datos de una vez desde el componente en el arreglo people */}
        <AddPerson setPeople={setPeople} />
        <hr />
        
        {/* Se llama al componente PersonItem y se le manda como propiedad las caracteristicas del 
        objeto que se encuentra en la primera posicion del arreglo people, se utiliza el operador
        spread para la desestructuracion */}

        <PersonItem {...people[0]} />
          

    </>
  )
}


