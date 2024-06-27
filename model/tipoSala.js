const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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

module.exports = TipoSala;