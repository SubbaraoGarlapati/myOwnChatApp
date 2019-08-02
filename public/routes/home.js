//Creates router or mini-app
const router = require('express').Router();

// GET /renders homepage.pug view
router.get('/', function(req, res, next) {
  res.render('homepage');
});

//sets export of module to be router
module.exports = router;
