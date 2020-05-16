var express = require('express');
var routes = express.Router();
// ...rest of the initial code omitted for simplicity.
const { check, validationResult } = require('express-validator');

// get index
routes.get('/', (req, res) => {
    res.send("Admin workinggg");
});

// get add page

routes.get('/add-page', (req, res) => {
   var title  = '';
   var slug  = '';
   var content = '';
   res.render('admin/add_page',{
       title : title,
       slug : slug,
       content : content
   });
});

// post add page

routes.post('/add-page', [check('title','what').isEmail()], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    
    res.render('admin/add_page', {
        title: title,
        slug: slug,
        content: content
    });
});

module.exports = routes;