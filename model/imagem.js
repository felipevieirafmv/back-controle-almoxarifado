import { DataTypes } from 'sequelize';
import sequelize from '../startup/db.js';

const Imagem = sequelize.define('Imagem', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Foto: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Imagem;
