const express = require('express');
require('dotenv').config();
const recipeRoute = require('./routes/recipeRoutes')

//start DB Connection
require('./database/conn');

//use modules
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/public', express.static(__dirname + 'public'));

//routes
app.use('/', recipeRoute);


//start server
const server = app.listen(process.env.PORT || ++process.env.PORT || 0, (err) => {
  if (err) console.log(err);
  console.log(`Server started at port ${server.address().port}`);
});