const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const TipoSala = require('./tipoSala');

const Sala = sequelize.define('Sala', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Andar: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

// Definindo relacionamento
Sala.belongsTo(TipoSala, { foreignKey: 'TipoSalaID' });

module.exports = Sala;
