//Creates router or mini-app
const router = require('express').Router();
// GET /renders signup.pug view
router.get('/', function(req, res, next) {
  res.render('signup');
});

//sets export of module to be router
module.exports = router;
