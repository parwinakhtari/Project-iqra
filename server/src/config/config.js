module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'sessiontrack',
        user: process.env.DB_USER || 'sessiontrack',
        password: process.env.DB_PASS || 'sessiontrack',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './sessiontrack.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.jwtSecret || 'mysecretkeyforsession'
    }
}
