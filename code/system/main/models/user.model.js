require('dotenv').config();
const Mongoose = require('mongoose');
const { UserHooks } = require('../hooks/user.hooks');
const Moment = require('moment-timezone');
const Token = require('jsonwebtoken');

const { Schema } = Mongoose;

const Structure = new Schema(
    {
        'Identifier' : {
            'type' : String,
            'required' : true,
            'unique' : true,
            'default' : () => `${Math.floor(Math.random() * 9) + 1}${Math.random().toString().slice(2, 8).padEnd(6, '0')}${Math.floor(Math.random() * 9) + 1}`,
        },
        'Name' : {
            'type' : String,
            'required' : true,
            'trim' : true,
        },
        'Number' : {
            'type' : String,
            'required' : true,
            'unique' : true,
        },
        'Mail' : {
            'type' : String,
            'required' : true,
            'unique' : true,
            'lowercase' : true,
            'trim' : true,
        },
        'Profile' : {
            'type' : String,
            'default' : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        },
        'Password' : {
            'type' : String,
            'required' : true,
        },
        'Birth' : {
            'type' : Date,
            'required' : true,
        },
        'Pin' : {
            'type' : String,
            'required' : false,
        },
        'Saving' : {
            'type' : Boolean,
            'default' : false,
        },
        'Role' : {
            'type' : String,
            'enum': ['User','Agent','Admin'],
            'default' : 'User',
        },
        'Created' : {
          'type' : Date,
          'default' : Moment.tz('Asia/Kolkata').toDate(),
        },
    }
); 

UserHooks( Structure );

Structure.methods.access = function () {
    return Token.sign(
        {
            'Identifier' : this.Identifier
        } ,
        process.env.ACCESS_SECRET,
        {
            'expiresIn' : process.env.ACCESS_EXPIRY
        }
    );
};
Structure.methods.refresh = function () {
    return Token.sign(
        {
            'Identifier' : this.Identifier
        },
        process.env.REFRESH_SECRET,
        {
            'expiresIn' : process.env.REFRESH_EXPIRY
        }
    );
};

const User = Mongoose.model( 'User', Structure );

module.exports = { User };