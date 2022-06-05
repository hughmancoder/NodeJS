const EventEmitter = require('events'); // upper case indicats class 


// extends inherents EventEmitter
class Logger extends EventEmitter {
    log(arg) {
        console.log(arg);
        // raise event, this refers to EventEmitter class
        this.emit('messagedLogged', {id: 1, url: 'http://localhost:8080'});
        console.log('event listener raised');
    }
}

module.exports = Logger;
