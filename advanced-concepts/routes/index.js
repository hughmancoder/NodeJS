// in real world we do not want all this code inside index.js so we structure our appliation
// dependencies
const config = require('config'); // has lot 
const Joi = require('joi'); // import module
const express = require('express');
const helmet =  require('helmet');
const morgan = require('morgan');
const app = express();
const logger = require('../middleware/logger');

// loading courses module containing courses routes
const courses = require('./courses');
const home = require('./home');

// CREATING DEBUGGING NAMESPACES
const debug = require('debug')('app:startup'); // second parameter is an abitrary namespace
const dbDebugger = require('debug')('app:db');

app.set('view engine', 'pug');
app.set('views','../views'); // default value


// configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server Name: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));


// MIDLEWARE FUNCTIONS
app.use(express.json()); // parses json and populates req.body 
app.use(express.urlencoded({ extender: true })); // populates req.body into json object
app.use(express.static('public')); // argument: name of folder: goto localhost:3000/readme.txt
app.use(helmet());  // Helps secure your apps by setting various HTTP headers.
app.use('/api/courses',courses); // for any routes that starts with /api/courses we use courses router
app.use('/', home); // for any routes starting with / use home router

// CONFIGURING ENVIRONMENT:  dev, testing, staging,  prodution...
if(app.get('env') === 'development') {
  app.use(morgan('tiny'));

    //   console.log('Morgan enabled...'); 
    debug('Morgan enabled...') // prefered to console.log()

}

// DbDebugger namespace  
dbDebugger('Connected to the database...'); 



app.get('/api/posts/:year/:month', (req, res) => {
    res.send(res.query);
    // res.send(req.params);
});

// PORT -> environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`)); // default port
 