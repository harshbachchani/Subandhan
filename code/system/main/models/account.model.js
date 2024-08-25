const Mongoose = require('mongoose');
const Moment = require('moment-timezone');

const { Schema } = Mongoose;

const Structure = new Schema(
    {
        'Identifier' : {
            'type' : String,
            'required' : true,
            'unique' : true,
            'ref': 'User', 
        },
        'Account' : {
            'type' : String,
            'required' : true,
            'unique' : true,
            'default' : () => `SNSA${Math.floor(Math.random() * 9) + 1}${Math.random().toString().slice(2, 8).padEnd(6, '0')}${Math.floor(Math.random() * 9) + 1}`,
        },
        'Balance' : {
            'type' : Number,
            'required' : true,
            'default' : 0,
        },
        'Status' : {
            'type' : Boolean,
            'required' : true,
            'default' : false,
        },
        'Created' : {
          'type' : Date,
          'default' : Moment.tz('Asia/Kolkata').toDate(),
        },
    }
);

const Account = Mongoose.model( 'Account', Structure );

module.exports = { Account };