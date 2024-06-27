import { Sequelize } from "sequelize";

//configurações da base de dados
const db = new Sequelize('AlmoxDB', 'Maycon', 'maycon',
{
    dialect: 'mssql', 
    host:'localhost', 
    port: 53418,
    timezone: '-03:00'
});

db.sync(() => console.log(`Banco de dados conectado`));

export default db;