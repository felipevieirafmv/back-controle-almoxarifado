import { DataTypes } from 'sequelize';
import sequelize from '../startup/db.js';

const TipoEquipamento = sequelize.define('TipoEquipamento', {
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

export default TipoEquipamento;
