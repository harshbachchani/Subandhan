const Classic = require('./versions/classic');

class AdminSockets {

    static create = ( Instance ) => {
        Classic(Instance);
    };

};

module.exports = { AdminSockets };