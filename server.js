var express = require('express');
var path  = require('path');
var mongoose = require('mongoose');
var config   = require('./config/database');
var bodyParser = require('body-parser');
var session = require('express-session');
var expressValidator = require('express-validator');





// connect to DB

mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error;'));
db.once('open',function (params) {
    console.log('DB connected');
    
})

var app = express();
app.set('views', path.join(__dirname, "views"));
app.set('view engine',"ejs");
app.use(express.static(path.join(__dirname,"public")));

// body parser middleware

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// express seesion middleware
app.use(session({
    secret : "keyboard cat",
    resave : false ,
    saveUninitialized: true,
    cookie:{secure: true}
}));

// Express Validator middleware


// get method

// app.get('/',(req,res)=>{
//     res.send("working");
// });

// creating routes 
// sending the request to pages.js
var pages = require('./routes/pages');
var Adminpages = require('./routes/admin_pages.js');

app.use('/',pages);
app.use ('/admin/pages',Adminpages);



app.listen(3000,(req,res)=>{
    console.log("Server is running at 3000");
    
});