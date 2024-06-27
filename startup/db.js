const sequelize = require('Sequelize');

//configurações da base de dados
const database = new sequelize('AlmoxDB', 'Emyli', 'senha',
{
    host:'localhost', 
    dialect: 'mssql', 
    dialectOptions: {
        options: {
          encrypt: true, // Caso necessário para conexões com SQL Server
        },
    },
    port: 1433,
    timezone: '-03:00'
});

database.sync();

module.exports = database;