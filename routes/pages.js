var express  = require('express');
var routes = express.Router();




routes.get('/', (req, res) => {
    res.render('index.ejs',{
        title : "HOME"
    })
});


module.exports = routes;