const Express = require('express');
const Classic = Express.Router();
Classic.get(
    '/', function ( Request , Response ) {
        Response.send('Agent');
    }
);
module.exports = { Classic };