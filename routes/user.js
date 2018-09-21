const express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('got to Get /user/');
})

router.post('/', (req, res, next) => {
  res.send('got to Post /user/');
})

router.get('/add', (req, res, next) => {
  res.send('got to Get /user/add')
})

module.exports = router;
