const Express = require('express');
const Classic = Express.Router();
Classic.get(
    '/', function ( Request , Response ) {
        Response.send('Admin');
    }
);
module.exports = { Classic };