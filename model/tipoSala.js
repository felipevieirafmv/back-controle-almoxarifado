import { DataTypes } from 'sequelize';
import sequelize from '../startup/db.js';

const TipoSala = sequelize.define('TipoSala', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

export default TipoSala;