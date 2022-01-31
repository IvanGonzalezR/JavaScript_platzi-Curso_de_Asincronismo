const somethingWillHappen = () => {
   return new Promise((resolve, reject) => {
      if (true) {
         resolve(`Solved`);
      } else {
         reject(`Rejected`);
      }
   })
}

// somethingWillHappen()
//    .then(response => console.log(response))
//    .catch(error => console.log(error));

const somethingWillHappen2 = () => {
   return new Promise((resolve, reject) => {
      if (true) {
         setTimeout(() => {
            resolve('True')
         }, 2000);
      } else {
         const error = new Error('Whoops!');
         reject('error');
      }
   })
}

// somethingWillHappen2()
//    .then(response => console.log(response))
//    .catch(error => console.log(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()]) //ejecuta todas
   .then(response => console.log(response))
   .catch(err => console.log(err));