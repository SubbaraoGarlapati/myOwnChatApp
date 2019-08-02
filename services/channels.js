const router = require('express').Router();

router.post('/',function(req,res,next) {
	res.json({channel: createChannel()})
})

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function createChannel() {
	client.chat.services(process.env.TWILIO_CHAT_SERVICE_SID)
           .channels
           .create({friendlyName: 'GeneralChannel'})
           .then(channel => console.log(channel.sid));
}

module.exports = router;