//loads modules
var express = require('express');
var router = express.Router();
var TokenService = require('../services/tokenService');

// POST /token 
//using request, creates json response containing token
router.post('/', function(req, res) {
	//retrieves data from request
  var deviceId = req.body.device;
  var identity = req.body.identity;

  	//creates token
  var token = TokenService.generate(identity, deviceId)

  	//creates response
  res.json({
    identity: identity,
    token: token.toJwt(),
  });
});

//sets module export to be router
module.exports = router;
