import { Sequelize } from "sequelize";

const database = new Sequelize('AlmoxDB', 'Emyli', 'senha',
{
    host:'localhost', 
    dialect: 'mssql', 
    dialectOptions: {
        options: {
          encrypt: true, 
        },
    },
    port: 1433,
    timezone: '-03:00'
});

database.sync();
export default database;
