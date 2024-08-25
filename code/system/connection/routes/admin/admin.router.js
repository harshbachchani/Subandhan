const Express = require('express');
const { Classic } = require('./versions/classic');
const Admin = Express.Router();
Admin.use(
    function ( Request , Response , Next ) {
        if (Request.headers['role-hash'] === process.env.ACCESS_ADMIN) {
            Next();
        } else {
            Response.status(403).json(
                {
                    'success': false,
                    'message' : 'Invalid Role-Hash Token For Role - Admin'
                }
            );
        };
    }
);
Admin.use( '/classic' , Classic );
module.exports = Admin;