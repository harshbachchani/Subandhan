const Classic = require('./versions/classic');

class ClientSockets {

    static create = ( Instance ) => {
        Classic( Instance );
    };

};

module.exports = { ClientSockets };