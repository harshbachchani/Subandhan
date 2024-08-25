const Express = require('express');
const { Classic } = require('./versions/classic');
const Agent = Express.Router();
Agent.use(
    function ( Request , Response , Next ) {
        if (Request.headers['role-hash'] === process.env.ACCESS_AGENT) {
            Next();
        } else {
            Response.status(403).json(
                {
                    'success': false,
                    'message' : 'Invalid Role-Hash Token For Role - Agent'
                }
            );
        };
    }
);
Agent.use( '/classic' , Classic );
module.exports = Agent;