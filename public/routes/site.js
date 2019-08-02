//Creates router or mini-app
const router = require('express').Router();
// GET /renders site.pug view
router.get('/', function(req, res, next) {
	res.render('site');
});

//sets export of module to be router
module.exports = router;