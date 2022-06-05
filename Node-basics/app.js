const EventEmitter = require('events'); // upper case indicats class 

const Logger = require('./logger'); // imports class from logger.js
const logger = new Logger();

// event listner on object
logger.on('messagedLogged', (arg) => { 
    console.log('Listener called', arg);
});

logger.log('message'); // caling class method


/*
    const logger = require('./Features/newModule.js'); // better to store value in constant
    // require('./newFolder/newModule.js');
    // require(../relative path);
    const address = require('./moduleWrapperFunction.js');

    console.log(address.address)
    console.log(logger); // gets imported method
    logger.log('message');
*/ 