const router = require('express').Router();

router.post('/',function(req,res,next) {

})

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function listMessages() {
	client.chat.services(process.env.TWILIO_CHAT_SERVICE_SID)
           .channels('CH97a99ecc7aa646b88bca96486d04504a')
           .messages
           .list({limit: 20})
           .then(messages => messages.forEach(m => console.log(m.sid)));
}
function sendMessage(message) {
	client.chat.services(process.env.TWILIO_CHAT_SERVICE_SID)
           .channels('CH97a99ecc7aa646b88bca96486d04504a')
           .messages
           .create({body: message})
           .then(message => console.log(message.sid));
}
function retrieveMessage(messageSid) {
	client.chat.services(process.env.TWILIO_CHAT_SERVICE_SID)
           .channels('CH97a99ecc7aa646b88bca96486d04504a')
           .messages(messageSid)
           .fetch()
           .then(message => console.log(message.to));
}
function updateMessage(messageSid,message) {
	client.chat.services(process.env.TWILIO_CHAT_SERVICE_SID)
           .channels('CH97a99ecc7aa646b88bca96486d04504a')
           .messages(messageSid)
           .update({body: message})
           .then(message => console.log(message.to));
}
function deleteMessage(messageSid) {
	client.chat.services(process.env.TWILIO_CHAT_SERVICE_SID)
           .channels('CH97a99ecc7aa646b88bca96486d04504a')
           .messages(messageSid)
           .remove()
           .then(message => console.log(message.sid));
}

module.exports = router;