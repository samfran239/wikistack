const express = require('express');
var router = express.Router();
const { User, Page } = require('../models');

router.get('/', (req, res, next) => {
	res.send('got to Get /user/');
});

router.post('/', async (req, res, next) => {
	const [ user, wasCreated ] = User.findOrCreate({
		where: {
			name: req.body.name,
			email: req.body.email
		}
	});
	const page = await Page.create(req.body);

	page.setAuthor(user);
	res.send(`/wiki/${page.slug}`);
});

router.get('/add', (req, res, next) => {
	res.send('got to Get /user/add');
});

module.exports = router;
