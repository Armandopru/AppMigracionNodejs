import database from '../db.js';
import { Sequelize } from 'sequelize';

const User = database.define('User', {
    Nombres: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Apellidos: {
      type: Sequelize.STRING,
      
    },
    Contraseña: {
        type: Sequelize.STRING,
    },
  },
  {
    Tablename: 'User',
  },
);

export default User
