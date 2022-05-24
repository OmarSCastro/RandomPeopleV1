
// Funcion asincrona para la petición http para la API


export const getPerson = async() => {

    const url = 'https://randomuser.me/api/';
    const resp = await fetch(url);
    const {results} = await resp.json();
    const persona = (data) => {
      return {
            nombre   : data[0].name.first,
            edad     : data[0].dob.age,
            genero   : data[0].gender,
            ciudad   : data[0].location.city,
            foto_url : data[0].picture.large,
        }
        
    }

    // Se retorna a persona como el objeto
    return persona(results);

  
}

