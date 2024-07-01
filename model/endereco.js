const { DataTypes } = require('sequelize');
const sequelize = require('../startup/db');

const Endereco = sequelize.define('Endereco', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Cep: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Cidade: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Bairro: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Rua: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Complemento: {
    type: DataTypes.STRING(100),
  },
  Uf: {
    type: DataTypes.CHAR(2),
    allowNull: false,
  },
});

module.exports = Endereco;
