const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser'); //do this in the routes;
const layout = require('./views/layout');
app.use(morgan('dev'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded (http url?)


app.use(express.static(__dirname + '/public'));


// app.use('/', routes)


app.get('/', (req, res) => {
  res.send(layout(`Hello World!`));
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})
