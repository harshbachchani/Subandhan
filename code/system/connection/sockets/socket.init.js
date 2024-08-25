const { AdminSockets } = require("./admin/admin.socket");
const { AgentSockets } = require("./agent/agent.socket");
const { ClientSockets } = require("./client/client.socket");

class Sockets {

    static initialize = ( Instance ) => {
        ClientSockets.create( Instance );
        AgentSockets.create( Instance );
        AdminSockets.create( Instance );
    };

};

module.exports = { Sockets };