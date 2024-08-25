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
        'Address' : {
            'type' : String,
            'required' : true,
        },
        'Age' : {
            'type' : Number,
            'required' : true,
        },
        'Income' : {
            'type' : Number,
            'required' : true,
        },
    }
);

const MicroFinance = Loan.discriminator( 'MicroFinance' , Structure );

module.exports = { MicroFinance }; 