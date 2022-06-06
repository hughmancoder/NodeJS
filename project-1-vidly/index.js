// dependencies
const Joi = require('joi'); // input validation
const express = require('express');
const app = express();
app.use(express.json()); // need for parsing express middleware

const genres = [
    { id: 0, genreName: 'Action' },
    { id: 1, genreName: 'Comedy' },
    { id: 2, genreName: 'Documentary' },
    { id: 3, genreName: 'Romance' },
]

function validateGenre(genreObj) {
    const schema = {
        genreName: Joi.string().min(3).required()
    };
    return Joi.validate(genreObj, schema);
};

app.get('/api/genres', (req, res) => {
    res.send(genres.map(objCopy => objCopy.genreName));
    // res.send(genres);
});

app.post('/api/genres', (req, res) => {
    console.log(`request.body: ${req.params}`);
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const genre = { // new genre object
        id: genres.length,
        genreName: req.body.genreName,
    };
    genres.push(genre);
    res.send(genre);
});

app.get('/api/genres/:id', (req, res) => {
    console.log(`getting request with id: ${req.params.id}`);
    const Genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!Genre) res.status(404).send(`genre not found`);
    res.send(Genre.genreName);
});


app.put('/api/genres/:id', (req, res) => {
    console.log(req.params)
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    console.log(genre);
    if (!genre) return res.status(404).send('the genre with given ID was not found');
    const { error } = validateGenre(req.body);
    console.log(`error: ${error}`)
    if (error) return res.status(400).send(error.details[0].message);
    genre.genreName = req.body.genreName;
    res.send(genre);
});

app.delete('/api/genres/:id', (req, res) => {
    console.log(`deleting value with id: ${req.params.id}`)
    const genre = (genres.find(c => c.id === parseInt(req.params.id)));
    if(!genre) return res.status(404).send('can\'t delete id')
    const index = genres.indexOf(genre);
    console.log(`index: ${index}`);
    genres.splice(index, 1); // delete that index
    res.send(genres); // return response to client
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
