const Mongoose = require('mongoose');
const Moment = require('moment-timezone');

const { Schema } = Mongoose;

const Structure = new Schema(
    {
        'Identifier' : {
            'type' : String,
            'required' : true,
            'ref': 'User', 
        },
        'Account' : {
            'type' : String,
            'required' : true,
            'ref' : 'Account',
        },
        'Amount' : {
            'type' : Number,
            'required' : true,
        },
        'Reference' : {
            'type' : String,
            'required' : true,
        },
        'Type' : {
            'type' : String,
            'enum' : [ "Loan" , "Scheme" ],
            'required' : true,
        },
        'Status' : {
            'type' : Boolean,
            'required' : true,
        },
        'Created' : {
          'type' : Date,
          'default' : Moment.tz('Asia/Kolkata').toDate(),
        },
    }
);

const Account = Mongoose.model( 'Account', Structure );

module.exports = { Account };