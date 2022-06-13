const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { // callback function
    // res.send('Hello World');
    res.render('index', {title: 'My Express App', message: 'Hello'}); // refers to index.pug
});

module.exports = router;