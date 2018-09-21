const express = require('express');
var router = express.Router();
const addPage = require('../views/addPage');
const wikiPage = require('../views/wikipage');
const { Page } = require('../models');

router.get('/', (req, res, next) => {
  res.send(addPage());
})

router.post('/', async (req, res, next) => {
  const data = req.body;
  const page = new Page ({
    title: data.title,
    content: data.content
  })
  try {
    await page.save();
    res.redirect(`/wiki/${page.slug}`);


  } catch (error) { next(error)};
})

router.get('/add', (req, res, next) => {
  res.send(addPage());
})

router.get('/:slug', async (req, res, next) => {
  const page = await Page.findOne({
    where: {slug: req.params.slug}
  })
  res.send(wikiPage(page));

});

module.exports = router;
