import database from '../db.js';
import { Sequelize } from 'sequelize';

const Admins = database.define('Admins', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    Nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Apellido: {
      type: Sequelize.STRING,
      
    },
    Contraseña: {
        type: Sequelize.STRING,
    },
  },
  {
    Tablename: 'Admins',
  },
);

export default Admins