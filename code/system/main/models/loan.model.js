const Mongoose = require('mongoose');
const Moment = require('moment-timezone');

const { Schema } = Mongoose;

const Structure = new Schema(
    {
        'Loan' : {
            'type' : String,
            'required' : true,
            'unique' : true,
            'default' : () => `LNID${Math.floor(Math.random() * 9) + 1}${Math.random().toString().slice(2, 8).padEnd(6, '0')}${Math.floor(Math.random() * 9) + 1}`,
        },
        'Identifier' : {
            'type' : String,
            'required' : true,
            'ref': 'User', 
        },
        'Type' : {
            'type' : String,
            'enum' : [ "Personal" , "Property" , "Business" , "Instant" , "Micro Finance" ],
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
        'Paid' : {
            'type' : Number,
            'required' : true,
            'default' : 0,
        },
        'Due' : {
            'type' : Number,
            'required' : true,
            'default' : function() {
                return (this.Amount + (this.Amount * this.Interest / 100)) - this.Paid;
            },
        },
        'Tenure' : {
            'type' : Number,
            'required' : true,
        },
        'Emi' : {
            'type' : Number,
            'required' : true,
        },
        'Completed' : {
            'type' : Number,
            'default' : 1,
        },
        'Pending' : {
            'type' : Number,
            'default' : function() {
                return this.Tenure - this.Completed;
            },
        },
        'Purpose' : {
            'type' : String,
            'required' : true,
        },
        'History' : {
            'type' : Array,
        },
        'Gaurantor' : {
            'type' : Array,
        },
        'Status' : {
            'type' : String,
            'enum' : [ "Active" , "Closed" , "Pending" , "Rejected" , "Overdue" ],
            'required' : true,
        },
        'Fullfilment' : {
          'type' : Date,
          'required' : false,
          'default' : function() {
              return Moment.tz('Asia/Kolkata').add(this.Tenure, 'months').toDate();
          },
        },
        'Sanctioned' : {
          'type' : Date,
          'required' : false,
          'default' : Moment.tz('Asia/Kolkata').toDate(),
        },
        'Requested' : {
          'type' : Date,
          'default' : Moment.tz('Asia/Kolkata').toDate(),
        },
    }
);

const Loan = Mongoose.model('Loan', Structure);

module.exports = { Loan };