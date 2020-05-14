var express = require('express');
var routes = express.Router();


routes.get('/', (req, res) => {
    res.send("Admin working");
});
routes.get('/test', (req, res) => {
    res.send("Admin test working");
});

module.exports = routes;