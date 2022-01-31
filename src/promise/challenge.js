const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

//Conocer cuántos personajes hay en total
//Llamar al primer elemento que se encuentre en results
//De este personaje, traer el nombre de la dimension

fetchData(API)
   .then(data => {
      console.log(data.info.count);
      return fetchData(`${API}${data.results[0].id}`);
   })
   .then(data => {
      console.log(data.name);
      return fetchData(data.origin.url);
   })
   .then(data => {
      console.log(data.dimension);
   })
   .catch(error => console.error(error));
