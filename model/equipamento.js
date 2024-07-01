const { DataTypes } = require('sequelize');
const sequelize = require('../startup/db');
const Imagem = require('./imagem');
const TipoEquipamento = require('./tipoEquipamento');

const Equipamento = sequelize.define('Equipamento', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Descricao: {
    type: DataTypes.STRING(300),
  },
});

// Definindo relacionamento
Equipamento.belongsTo(Imagem, { foreignKey: 'ImagemID' });
Equipamento.belongsTo(TipoEquipamento, { foreignKey: 'TipoEquipamentoID' });

module.exports = Equipamento;
