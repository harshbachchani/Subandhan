require('dotenv').config();
const Mongoose = require('mongoose');

class Base {
    static connect = async () => await Mongoose.connect( process.env.URL ).then(
        async function ( value ) { }
    ).catch(
        function ( error ) {
            throw new Error( "Failed to establish connection to Database.\n" + "Error - " + error );
        }
    );
};

module.exports = { Base };