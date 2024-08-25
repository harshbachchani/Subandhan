const Classic = require('./versions/classic');

class AgentSockets {

    static create = ( Instance ) => {
        Classic( Instance );
    };

}; 

module.exports = { AgentSockets };