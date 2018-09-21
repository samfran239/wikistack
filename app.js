const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser'); //do this in the routes;
const layout = require('./views/layout');
const models = require('./models') //used to be const { db, Page, User } = require('./models')
const PORT = 3000;

app.use(morgan('dev'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded (http url?)


app.use(express.static(__dirname + '/public'));


// app.use('/', routes)


app.get('/', (req, res) => {
  res.send(layout(`Hello World!`));
})

models.db.authenticate(). //must run this each time so that we can access our db
then(() => {
  console.log('connected to the database');
})

const init = async () => {
  await models.db.sync() // {force: true}
  // await models.Page.sync() --> does same thing as above
  // await models.User.sync()
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();

