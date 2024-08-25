require('dotenv').config();

const Express = require('express');
const Cors = require('cors');
const Helmet = require('helmet');
const Xss = require('xss-clean');
const HPP = require('hpp');
const Sanitize = require('express-mongo-sanitize');
const Limiter = require('express-rate-limit');

class Security {

    constructor( Connection ) {
        Connection.use(
            Cors(
                {
                    origin: process.env.CORS,
                    methods: ['POST', 'PUT', 'DELETE'],
                    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Hash', 'Role-Hash'],
                    credentials: false,
                }
            )
        );
        Connection.use(
            Express.json()
        );
        Connection.use(Helmet());
        Connection.use(Xss());
        Connection.use(HPP());
        Connection.use(Sanitize());
        Connection.use(
            Limiter(
                {
                    windowMs: 15 * 60 * 1000,
                    max: 100,
                    message: 'You cant send more than 100 requests in 15 mins',
                }
            )
        );
        Connection.use(
            '/', function (Request, Response, Next) {
                if (Request.headers['access-hash'] === process.env.ACCESS) {
                    Next();
                } else {
                    Response.status(403).json(
                        {
                            'success': false,
                            'message' : 'Invalid Access-Hash Token'
                        }
                    );
                };
            }
        );
        Connection.use(
            '/', function (Request, Response, Next) {
                if (!Request.headers['role-hash']) {
                    Response.status(403).json(
                        {
                            'success': true,
                            'message' : 'Role-Hash Token Not Found'
                        }
                    );
                } else if (![ process.env.ACCESS_USER , process.env.ACCESS_AGENT , process.env.ACCESS_ADMIN ].includes(Request.headers['role-hash'])) {
                    Response.status(403).json(
                        {
                            'success': true,
                            'message' : 'Invalid Role-Hash Token'
                        }
                    );
                } else {
                    Next();
                };
            }
        );
    };

};

module.exports = { Security };