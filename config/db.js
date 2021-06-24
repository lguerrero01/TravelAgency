import Sequelize from 'sequelize'

const db = new Sequelize ('agenciaviajes', 'root', '', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    definee: {
        timestamps : false
    },
    pool: {
        max: 5,
        min: 0,
        acquere: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;