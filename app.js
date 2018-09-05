//creating the express objext to be used within the file.
const express = require('express');
//the path object helps save and handle the server location.
const path = require('path');

const routes = require('./routes')
// run the express main function and save it ass the app object.
const app = express();
// app.set allows me to set settings pertaining to this particular server instance.
app.set('view engine', 'ejs');
// tells the server instance to serve the public folder to the client.
app.use(express.static(path.join(__dirname, 'public')));
//Created a home page route.
app.get('/', routes.home)
//create test route to see how routes work
app.get('/test',(req,res)=>{
    res.render('test');
})
//set-up a listener to listen for a port we use
app.listen(3000, ()=> console.log('app listening on port 3000'))