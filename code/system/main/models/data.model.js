const Mongoose = require('mongoose');
const { DataHooks } = require('../hooks/data.hooks');

const { Schema } = Mongoose;

const Structure = new Schema(
    {
        'Identifier' : {
            'type' : String,
            'required' : true,
            'unique' : true,
            'ref': 'User', 
        },
        'Address' : {
            'type' : Object,
            'default' : {
                'Address' : {
                    '1' : 'NaN',
                    '2' : 'NaN',
                },
                'City' : 'NaN',
                'Zip' : 'NaN',
                'State' : 'NaN',
            }
        },
        'Pan' : {
            'type' : String,
            'default' : 'NaN',
        },
        'PanID' : {
            'type' : String,
        },
        'Aadhar' : {
            'type' : String,
            'default' : 'NaN',
        },
        'AadharID' : {
            'type' : String,
        },
        'Voter' : {
            'type' : String,
            'default' : 'NaN',
        },
        'VoterID' : {
            'type' : String,
        },
        'Signature' : {
            'type' : String,
            'default' : 'NaN',
        },
        'Photo' : {
            'type' : String,
            'default' : 'NaN',
        },
        'Employment' : {
            'type' : String,
            'enum' : [ "Student" , "Salaried" , "Self Employed" ],
            'required' : true,
        },
        'Salary' : {
            'type' : String,
            'enum' : [ "Below 2 Lakhs" , "2-5 Lakhs" , "5-10 Lakhs" , "Above 10 Lakhs" ],
            'required' : true,
        },
        'Updated' : {
          'type' : Date,
        },
    }
);

DataHooks( Structure );

const Data = Mongoose.model( 'Data', Structure );

module.exports = { Data };