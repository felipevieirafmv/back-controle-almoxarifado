const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Imagem = require('./imagem');
const Endereco = require('./endereco');
const TipoFuncionario = require('./tipoFuncionario');

const Funcionario = sequelize.define('Funcionario', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  Matricula: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  Senha: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Salt: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
});

// Definindo relacionamentos
Funcionario.belongsTo(Imagem, { foreignKey: 'ImagemID' });
Funcionario.belongsTo(Endereco, { foreignKey: 'EnderecoID' });
Funcionario.belongsTo(TipoFuncionario, { foreignKey: 'TipoFuncionarioID' });

module.exports = Funcionario;
models/tipoSala.js
javascript
Copiar código
// models/tipoSala.js
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