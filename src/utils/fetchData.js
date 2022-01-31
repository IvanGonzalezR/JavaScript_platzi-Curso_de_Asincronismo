let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => { //Trae la info de la API
   return new Promise((resolve, reject) => {
      const xhttp = new XMLHttpRequest();
      xhttp.open('GET', url_api, true); //true para activar Asincronismo
      xhttp.onreadystatechange = (() => {
         if (xhttp.readyState === 4) { //el 4 dice que la peticion finalizo
            (xhttp.status === 200) ?
            resolve(JSON.parse(xhttp.responseText)): reject(new Error('Error', url_api));
         }
      });
      xhttp.send();
   });
}

module.exports = fetchData;

//export default fetchData; NO FUNCA