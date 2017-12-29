const path = require('path')

module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'user.db',
        user: process.env.DB_USER || '',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../user.db')
        }
    }
}
