
import database from './db.js';
import User from './Models/Modelsauser.js';
import Admins from './Models/Modelsadmin.js';

async function testDatabaseConnectionAndMigration() {
  try {
    await database.authenticate();
    console.log('La conexion se ha establecido satisfactoriamente');
    runMigrations();
  } catch (error) {
    console.error('No se pudo conectar la base de datos:', error);
  }
}

async function runMigrations() {
  try {
    await User.sync({ alter: true });
    await Admins.sync({ alter: true });
    console.log('Migración exitosa');
  } catch (error) {
    console.error('Error en la migración:', error);
  } finally {
    await database.close();
  }
}

testDatabaseConnectionAndMigration();
