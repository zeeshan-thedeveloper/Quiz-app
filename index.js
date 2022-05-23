var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');

// Importing routes
var authRouter = require('./routes/AuthenticationRoutes')

// Importing database
var db = require('./database/Connector')

const app = express();

// Configuring app 

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Setting up routes
app.use("/",authRouter)

app.listen(3000,()=>{
    console.log("Listening to port 3000")
});  