const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const Structure = new Schema(
    {
        'Loan' : {
            'type' : String,
            'required' : true,
            'ref' : 'Loan'
        },
        'Name' : {
            'type' : String,
            'required' : true,
        },
        'Address' : {
            'type' : String,
            'required' : true,
        },
        'Phone' : {
            'type' : Number,
            'required' : true,
        },
        'Mail' : {
            'type' : String,
            'required' : true,
        },
        'Relation' : {
            'type' : String,
            'enum' : [ "Father" , "Mother" , "Brother" , "Sister" , "Uncle" , "Aunt" , "Friend" , "Colleague" , "Other" ],
            'required' : true,
        },
    }
);

const Gaurantor = Mongoose.model( 'Gaurantor' , Structure );

module.exports = { Gaurantor }; 