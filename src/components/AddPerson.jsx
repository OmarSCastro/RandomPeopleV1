import React from 'react'
import { Button } from 'primereact/button';
// import Button from '@mui/material/Button';
import { getPerson } from '../helpers/getPerson';

export const AddPerson = ({setPeople} ) => {

    // Se crea la clase Persona con los atributos que vamos a utilizar de la API, para optimizar codigo
    // y solo instanciar las personas necesarias
    class Persona{
        constructor( nombre, edad, genero, ciudad, foto_url){
            this.nombre   = nombre;
            this.edad     = edad;
            this.genero   = genero;
            this.ciudad   = ciudad;
            this.foto_url = foto_url;
        }

    }

    

  
    // Funcion para utilizar el helper getPersona y una vez obteniendo los datos se instancia a la clase
    // Persona para asignar sus atributos y se envian a people a través de su manejador setPeople,
    // primero mandamos a la nueva persona y despues se envia el arreglo con el operador spread

    const fetchUser = () => {
        getPerson().then(person => {
            const nuevaPersona = new Persona();
            nuevaPersona.nombre = person.nombre;
            nuevaPersona.edad = person.edad;
            nuevaPersona.genero = person.genero;
            nuevaPersona.ciudad = person.ciudad;
            nuevaPersona.foto_url = person.foto_url;
            // setPeople(  (people => [nuevaPersona]) );
            setPeople(  (people => [nuevaPersona, ...people]) );
        })
    }

    

    // Boton que manda a llamar la funcion fetchUser
  return (
    <div>
        {/* <Button variant="contained" onClick={fetchUser}>Hello World</Button>; */}

        <Button type='button' label='Buscar' icon='pi pi-search' onClick={fetchUser}/>

    </div>
  )
}
