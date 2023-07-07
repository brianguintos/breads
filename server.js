// DEPENDENCIES
const express = require('express');
const morgan = require('morgan');

const app = express()

// CONFIGURATION
require('dotenv').config()

const PORT = process.env.PORT;


app.use(morgan('tiny'));


// MIDDLEWARE
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// ROUTES
app.get('/', function(req, res) {
  res.send('Welcome to an Awesome App about Breads!')
})

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})


// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)


// LISTEN
app.listen(PORT, function(){
})
