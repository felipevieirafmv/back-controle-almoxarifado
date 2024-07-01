const { DataTypes } = require('sequelize');
const sequelize = require('../startup/db');

const Imagem = sequelize.define('Imagem', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Foto: {
    type: DataTypes.BLOB('long'),
    allowNull: false,
  },
});

module.exports = Imagem;
