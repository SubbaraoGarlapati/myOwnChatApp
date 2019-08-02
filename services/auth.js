//Creates router or mini-app
const router = require('express').Router();

var users = require('./users.js');

router.use('/users',users);
// POST /redirects to login or home
router.post('/', function(req, res, next) {
	identity = req.body.identity;
	password = req.body.password;
	$.post('/users',{func: 'createUser', identity: identity, password: password}, null, 'json')
		.done(function(response) {
			console.log('response from createUser is ' + response)
			if (typeof response == undefined)
			{
				res.json({
					allow: false
				});
			} else {
				res.json({
					allow: true
				})
			}
		})
});

//sets export of module to be router
module.exports = router;