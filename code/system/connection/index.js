const { Routes } = require("./routes/routes.init");
const { Sockets } = require("./sockets/socket.init");

class Connection {
    constructor( Instance ) {
        if (!Instance) {
            throw new Error('1 Argument Expected 0 Found');
        };
        if (typeof Instance !== 'object') {
            throw new Error('Object Expected');
        };
        Routes.initialize( Instance.api );
        Sockets.initialize( Instance.socket );
    };
}

module.exports = { Connection };