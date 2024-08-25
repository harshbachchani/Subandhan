const Moment = require('moment-timezone');

const Hooks = Schema => {

    Schema.pre(
        'save', async function ( Next ) {
            try {
                this.Updated = Moment.tz('Asia/Kolkata').toDate();
                Next();
            } catch ( error ) {
                Next(error);
            };
        }
    );

};

module.exports = { 'DataHooks' : Hooks };