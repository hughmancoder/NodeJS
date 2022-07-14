/*
promise: object which holds eventual result of asycronous operation (proimises result of async operation)
state: Pending, fufilled/resolved (completed), rejected (error)
*/

const p = new Promise(function(resolve, reject){
});

// or

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(1); // resolving value immediately
    reject(new Error('message')); // if resolve does not work 
    }, 2000);
    
});

p1.then(result => console.log('Result' , result))
.catch(err => console.log("Error", err.message));