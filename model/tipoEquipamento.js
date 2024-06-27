const { DataTypes } = require('sequelize');
const sequelize = require('../startup/db');

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

module.exports = TipoEquipamento;
