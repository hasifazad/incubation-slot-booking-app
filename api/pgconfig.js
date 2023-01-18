const {Client} = require('pg')

 
        const client = new Client({
            host: 'localhost',
            database:'incubation',
            port: 5432,
            user: 'postgres',
            password: 'ASIFeleven@11'
        })

module.exports = {client}

