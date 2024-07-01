import { Sequelize } from "sequelize";

const dbName = "AlmoxDB";
const dbUser = "root";
const dbHost = "localhost";
const dbPassword = "aluno";

const db = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
});

export default db;