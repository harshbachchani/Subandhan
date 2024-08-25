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
        'Zip' : {
            'type' : Number,
            'required' : true,
        },
        'Pan' : {
            'type' : String,
            'required' : true,
        },
        'Udhyam' : {
            'type' : String,
        },
        'Gst' : {
            'type' : String,
        },
    }
);

const Self = Loan.discriminator( 'Self' , Structure );

module.exports = { Self }; 