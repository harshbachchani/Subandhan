const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const Structure = new Schema(
    {
        'Scheme' : {
            'type' : String,
            'unique' : true,
            'required' : true,
            'ref' : 'Scheme'
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

const Nominie = Mongoose.model( 'Nominie' , Structure );

module.exports = { Nominie }; 