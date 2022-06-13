
// dependencies
const config = require('config'); // has lot 
const Joi = require('joi'); // import module
const express = require('express');
const helmet =  require('helmet');
const morgan = require('morgan');
const app = express();

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


// CONFIGURING ENVIRONMENT:  dev, testing, staging,  prodution...
if(app.get('env') === 'development') {
  app.use(morgan('tiny'));

    //   console.log('Morgan enabled...'); 
    debug('Morgan enabled...') // prefered to console.log()

}

// DbDebugger namespace  
dbDebugger('Connected to the database...'); 

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
]

app.get('/', (req, res) => { // callback function
    // res.send('Hello World');
    res.render('index', {title: 'My Express App', message: 'Hello'}); // refers to index.pug
});

// HANDLING GET REQUESTS
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(res.query);
    // res.send(req.params);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('the course with given ID was not found');
    res.send(course.name);
});

// HANDLING POST REQESTS
app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    console.log(course);
    courses.push(course);
    res.send(course);
});

// HANDLING PUT REQUEST -> updates existing resouce

app.put('/api/courses/:id', (req, res) => {
    // lookup course if not existing return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));

    console.log(course);
    if (!course) return res.status(404).send('the course with given ID was not found');

    const { error } = validateCourse(req.body); // result.error
    console.log(`error: ${error}`)
    if (error) return res.status(400).send(error.details[0].message); // validate course 
    course.name = req.body.name;
    res.send(course); // return updated course
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    console.log(`schema: ${schema}`);
    return Joi.validate(course, schema);
}

app.delete('/api/courses/:id', (req, res) => {
    console.log('delete request called');
    // return 404 error
    const course = courses.find(c => c.id === parseInt(req.params.id)); // request params from url
    if (!course) return;

    // delete courses
    const index = courses.indexOf(course);
    console.log(index);
    courses.splice(index, 1); // deletes that index

    // return response to client
    res.send(course);

});

// PORT -> environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`)); // default port


/*
http methods
app.get()
app.post()
app.put()
app.delete()
*/































