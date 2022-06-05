// dependencies
const Joi = require('joi'); // import module
const express = require('express');
const app = express();
app.use(express.json()); // needed for parsing json (Middleware)

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
]
app.get('/', (req, res) => { // callback function
    res.send('Hello World');
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
    if (error) return res.status(400).send(error.edtails[0].message);
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































