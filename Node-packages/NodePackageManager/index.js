var _ = require('./node_modules/underscore'); // underscore.js in same file

let state = _.contains([1,2,3],2);
console.log(state); // returns true
