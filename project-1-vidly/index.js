// dependencies
const Joi = require('joi'); // input validation
const express = require('express');
const genres = require('./routes/genres');
const app = express();


app.use(express.json()); // need for parsing express middleware
app.use('/api/genres', genres) // middleware tells us to use genres router if path is /api/genres/..

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
