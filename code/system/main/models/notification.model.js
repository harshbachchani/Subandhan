const Mongoose = require('mongoose');
const Moment = require('moment-timezone');

const { Schema } = Mongoose;

const Structure = new Schema(
    {
        'Address' : {
            'type' : String,
            'default' : function () {
                return `NYID${Math.floor(Math.random() * 9) + 1}${Math.random().toString().slice(2, 8).padEnd(6, '0')}${Math.floor(Math.random() * 9) + 1}`;
            },
        },
        'Identifier' : {
            'type' : String,
            'ref' : 'User',
        },
        'Account' : {
            'type' : String,
            'ref' : 'Account',
        },
        'Reference' : {
            'type' : String,
        },
        'Category' : {
            'type' : String,
            'enum' : [ "General" , "Account" , "Scheme" , "Loan" , "User" , "Agent" , "Admin" ],
            'required' : true,
        },
        'Title' : {
            'type' : String,
            'required' : true,
        },
        'Description' : {
            'type' : String,
            'required' : true,
        },
        'Seen' : {
            'type' : Boolean,
            'default' : false,
        },
        'Created' : {
            'type' : Date,
            'default' : Moment.tz('Asia/Kolkata').toDate(),
        },
    }
);

const Notification = Mongoose.model( 'Notification' , Structure );

module.exports = { Notification }; 