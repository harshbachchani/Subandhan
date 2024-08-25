const Admin = require("./admin/admin.router");
const Agent = require("./agent/agent.router");
const Client = require("./client/client.router");

class Routes {
    
    static initialize = ( Instance ) => {
        Instance.use('/api/secure/client', Client );
        Instance.use('/api/secure/agent', Agent );
        Instance.use('/api/secure/admin', Admin );
        Instance.use(
            ( Request , Response , Next ) => {
                Response.status(404).json(
                    {
                        'success': false,
                        'message': 'Not Found'
                    }
                );
            }
        );
    };

};

module.exports = { Routes };