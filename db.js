const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('teste', 'postgres', '1234', { 
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
});

module.exports = sequelize;
