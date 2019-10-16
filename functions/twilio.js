const twilio = require('twilio');

const accountSid = 'ACddf9f630fe2658f6d1b544173fe09187';
const authoToken = '23d6d240034aac2b0438026043d0ee4d';

module.exports = new twilio.Twilio(accountSid, authoToken);