const Express = require('express');
const { Classic } = require('./versions/classic');
const Client = Express.Router();
Client.use(
    function ( Request , Response , Next ) {
        if (Request.headers['role-hash'] === process.env.ACCESS_USER) {
            Next();
        } else {
            Response.status(403).json(
                {
                    'success': false,
                    'message' : 'Invalid Role-Hash Token For Role - Client'
                }
            );
        };
    }
);
Client.use( '/classic' , Classic );
module.exports = Client;