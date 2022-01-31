let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api, callback) { //Trae la info de la API
   let xhttp = new XMLHttpRequest();
   xhttp.open('GET', url_api, true); //true para activar Asincronismo
   xhttp.onreadystatechange = function (event) {
      if (xhttp.readyState === 4) { //el 4 dice que la peticion finalizo
         if (xhttp.status === 200) {
            callback(null, JSON.parse(xhttp.responseText));
         } else {
            const error = new Error('Error ' + url_api);
            return callback(error, null);
         }
      }
   }
   xhttp.send();
}

/**
 * Obtener el id del primer personaje [0].
 * Obtener la url para obtener datos del origen del personaje 
 *      esto para poder generar una nueva peticion. 
 * Con la nueva url, pedir la dimension de la que viene
 * Luego pedir el nombre del primer residente obtenido de esa dimension
 */
fetchData(API, function (error1, data1) {
   if (error1) return console.error(error1); //por si hay errores que termine

   fetchData(API + data1.results[0].id, function (error2, data2) {
      if (error2) return console.error(error2);

      fetchData(data2.origin.url, function (error3, data3) {
         if (error3) return console.error(error3);

         console.log(`Total de personajes encontrados: ${data1.info.count}`);
         console.log(`Nombre: ${data2.name}`);
         console.log(`Dimensión: ${data3.dimension}`);
         console.log(`Residentes de la dimensión ${data3.dimension}` +
            `: ${data3.residents.length}`);

         fetchData(data3.residents[0], function (error4, data4) {
            if (error4) return console.error(error4);

            console.log(data4.name);
         });
      }); //data2 ya tiene la respuesta al anterior request
   }); //results y id son los datos que devuelve la API
});