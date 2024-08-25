const Twilio = require('twilio')(
    process.env.TWILIO_ID, process.env.TWILIO_TOKEN
);

module.exports = { Twilio };