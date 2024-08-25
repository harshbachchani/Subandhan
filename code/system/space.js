const Express = require('express')();
const HTTPs = require('http');
const { Security } = require('./.security/.js');
const { Connection } = require('./connection/index.js');
const { Server } = require('socket.io');
const { Base } = require('../.configs/config.base.js');

const Space = () => {
    Base.connect();
    const Protocol = HTTPs.createServer( Express );
    new Security( Express );
    new Connection(
        {
            api: Express,
            socket: new Server( Protocol ),
        }
    );
    return Protocol;
};

module.exports = Space;