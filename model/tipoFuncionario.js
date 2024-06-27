const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoFuncionario = sequelize.define('TipoFuncionario', {
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

module.exports = TipoFuncionario;
