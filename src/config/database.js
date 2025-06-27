import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,       // Nombre de la base de datos
  process.env.DB_USER,       // Usuario
  process.env.DB_PASSWORD,   // Contraseña
  {
    host: process.env.DB_HOST,          // Host (ej. localhost)
    dialect: process.env.DB_DIALECT,    // Motor (ej. 'mysql', 'postgres', 'sqlite', 'mssql')
    port: process.env.DB_PORT,          // Puerto
    logging: false                      // Opcional: para desactivar logs SQL en consola
  }
);
export const initBD = async () => {
  try {
    await sequelize.authenticate();  // Verifica conexión
    console.log('Conectado a la base de datos');
    await sequelize.sync();           // Sincroniza modelos con BD (crea tablas)
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error.message);
  }
};
export default sequelize;