const twilio = require('twilio');

// Add your twilio sid and token here

const accountSid = '';
const authoToken = '';

module.exports = new twilio.Twilio(accountSid, authoToken);