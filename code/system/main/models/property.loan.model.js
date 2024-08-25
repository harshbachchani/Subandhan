const Mongoose = require('mongoose');
const { Loan } = require('./loan.model');

const { Schema } = Mongoose;

const Structure = new Schema(
    {
        'Nature' : {
            'type' : String,
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
        'Value' : {
            'type' : Number,
            'required' : true,
        },
    }
);

const Property = Loan.discriminator( 'Property' , Structure );

module.exports = { Property }; 