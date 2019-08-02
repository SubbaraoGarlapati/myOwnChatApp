//load twilio module
const twilio = require('twilio');

//create general access token and chat grant
const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

//generate token
function TokenGenerator(identity, deviceId) {
  //appName
  const appName = 'TwilioChat';

  // Create a unique ID for the client on their current device
  const endpointId = appName + ':' + identity + ':' + deviceId;

  // Create a "grant" which enables a client to use Chat as a given user,
  // on a given device
  const chatGrant = new ChatGrant({
    serviceSid: process.env.TWILIO_CHAT_SERVICE_SID,
    endpointId: endpointId,
  });

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_CHAT_API_KEY,
    process.env.TWILIO_CHAT_API_SECRET
  );

  token.addGrant(chatGrant);
  token.identity = identity;

  return token;
}

//set the exports of module to be an object with function TokenGenerator named 'generate'
module.exports = { generate: TokenGenerator };
