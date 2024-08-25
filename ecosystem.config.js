module.exports = {

    apps : [

        {
            name : 'Subandhan.Nidhi',
            namespace : 'Subandhan Nidhi',
            script : 'code/index.js',
            instances : '1',
            autorestart : true,
            maxrestart : '5000',
            watch : true,
            max_memory_restart : '2G',
            env: {
              NODE_ENV: 'development'
            },
            env_production : {
              NODE_ENV: 'production'
            }
        }

    ]

};