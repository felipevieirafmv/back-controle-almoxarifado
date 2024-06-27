const sequelize = require('Sequelize');

//configurações da base de dados
const database = new sequelize('AlmoxDB', 'Emyli', 'senha',
{
    dialect: 'mssql', 
    host:'localhost', 
    port: 1433,
    timezone: '-03:00'
});

database.sync();

module.exports = database;