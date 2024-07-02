import { DataTypes } from 'sequelize';
import sequelize from '../startup/db.js';
import TipoSala from './tipoSala.js';

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

export default Sala;
