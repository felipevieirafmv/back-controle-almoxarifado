import { DataTypes } from 'sequelize';
import sequelize from '../startup/db.js';
import Imagem from './imagem.js';
import TipoEquipamento from './tipoEquipamento';

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

export default Equipamento;
