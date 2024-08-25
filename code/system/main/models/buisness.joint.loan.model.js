const Mongoose = require('mongoose');
const { Loan } = require('./loan.model');

const { Schema } = Mongoose;

const Structure = new Schema(
    {
        'Name' : {
            'type' : String,
            'required' : true,
        },
        'Nature' : {
            'type' : String,
            'required' : true,
        },
        'Age' : {
            'type' : Number,
            'required' : true,
        },
        'Profit' : {
            'type' : Number,
            'required' : true,
        },
        'Address' : {
            'type' : String,
            'required' : true,
        },
        'Zip' : {
            'type' : Number,
            'required' : true,
        },
        'Phone' : {
            'type' : Number,
            'required' : true,
        },
        'Alternate' : {
            'type' : Number,
            'required' : true,
        },
        'Mail' : {
            'type' : String,
            'required' : true,
            'trim' : true,
        },
        'Pan' : {
            'type' : String,
            'required' : true,
        },
        'Udhyam' : {
            'type' : String,
            'required' : true,
        },
        'Gst' : {
            'type' : String,
        },
    }
);

const Joint = Loan.discriminator( 'Joint' , Structure );

module.exports = { Joint }; 