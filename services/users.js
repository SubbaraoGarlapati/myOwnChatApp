console.log('users')
const router = require('express').Router();
let userSid = 'asd';

router.post('/', function(req,res,next) {
	identity = req.body.identity;
	password = req.body.password;
	createUser(identity,password).then()
	if (req.body.func === 'createUser') {
		res.json({
			users: createUser(identity,password)
		});
	}
	if (req.body.func === 'retrieveUser') {
		res.json({
			users: retrieveUser(identity)
		});
	}
});

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function listMembers() {
	client.chat.services(process.env.TWILIO_CHAT_SERVICE_SID)
				.users
				.list({limit: 10000})
				.then(users => users.forEach(u => console.log(u.sid)));
}

function createUser(userIdentity,password) {
	console.log('inside createUser function')
	usersid = client.chat.services(process.env.TWILIO_CHAT_SERVICE_SID)
						.users
						.create({
							identity: userIdentity, 
							friendlyName: password
							})
				.then((user) => {return user.sid})
	console.log(usersid)
	console.log('userSid outside promise is ' + usersid)
	return usersid
					// .users
					// .create({
					// 	identity: userIdentity,
					// 	friendlyName: password
					// })
					// .sid
}

function setUserSid(usersid) {
	console.log(usersid);
	userSid = usersid;
}
function retrieveUser(identity) {
	client.chat.services(process.env.TWILIO_CHAT_SERVICE_SID)
				.users(identity)
				.fetch()
				.then(user => console.log(user.friendlyName));
}

function updateUser(userSid, userRole) {
	client.chat.services(process.env.TWILIO_CHAT_SERVICE_SID)
				.users(userSid)
				.update({roleSid: userRole})
				.then(user => console.log(user.friendlyName));
}

function deleteUser(userSid) {
	client.chat.services(process.env.TWILIO_CHAT_SERVICE_SID)
				.users(userSid)
				.remove()
				.then(user => console.log(user.sid));
}

module.exports = router;