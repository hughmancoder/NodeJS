/*

// creating a promise which is already resolved
const p = Promise.resolve({id: 1});
p.then(res => console.log(res));

const p1 = Promise.reject(new Error('reason for error')); // creates error object
p1.catch(error => console.log(error));

*/

// == parallel processing promises ==
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1");
    resolve(1);
  }, 200);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 2");
    resolve(2);
  }, 200);
});

Promise.all([p2, p3]) // simultaneously starts promise run
    .then((result) => console.log(result)) // result avail as array
    .catch((error) => console.log("error", error.message));

Promise.race([p2, p3]) // returns first completed call
    .then((result) => console.log(result)) 
    .catch((error) => console.log("error", error.message));
