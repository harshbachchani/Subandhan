const Mongoose = require('mongoose');
const Moment = require('moment-timezone');

const { Schema } = Mongoose;

const Structure = new Schema(
    {
        'Scheme' : {
            'type' : String,
            'required' : true,
            'unique' : true,
            'default' : () => `SMID${Math.floor(Math.random() * 9) + 1}${Math.random().toString().slice(2, 8).padEnd(6, '0')}${Math.floor(Math.random() * 9) + 1}`,
        },
        'Identifier' : {
            'type' : String,
            'required' : true,
            'ref': 'User', 
        },
        'Account' : {
            'type' : String,
            'required' : true,
            'ref': 'Account', 
        },
        'Type' : {
            'type' : String,
            'enum' : [ "Monthly" , "Recurring" , "Fixed" ],
            'required' : true,
        },
        'Income' : {
            'type' : Number,
            'required' : true,
        },
        'Amount' : {
            'type' : Number,
            'required' : true,
        },
        'Interest' : {
            'type' : Number,
            'required' : true,
        },
        'Tenure' : {
            'type' : Number,
            'required' : true,
        },
        'Paid' : {
            'type' : Number,
            'required' : true,
        },
        'Pending' : {
            'type' : Number,
            'required' : true,
        },
        'Penalty' : {
            'type' : Number,
            'required' : true,
        },
        'Nominie' : {
            'type' : String,
            'ref' : 'Nominie'
        },
        'Status' : {
            'type' : String,
            'enum' : [ "Active" , "Completed" , "Overdue" , "Pending" ],
            'required' : true,
        },
        'Pay' : {
            'type' : Date,
            'default' : function() {
                return Moment.tz('Asia/Kolkata').toDate();
            },
        },
        'Maturity' : {
            'type' : Date,
            'default' : function() {
                return Moment.tz('Asia/Kolkata').add(this.Tenure, 'months').toDate();
            },
        },
        'Created' : {
            'type' : Date,
            'default' : function () {
                return Moment.tz('Asia/Kolkata').toDate();
            },
        },
    }
);

const Loan = Mongoose.model('Loan', Structure);

module.exports = { Loan };