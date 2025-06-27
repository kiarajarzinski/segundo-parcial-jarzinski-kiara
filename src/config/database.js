import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect: process.env.DB_DIALECT, 
        port: process.env.PORT
    }
);
    export const initBD = async () => {
        try {
         await sequelize.authenticate ();
            console.log ('Conectado a la base de datos');
        await sequelize.sync();   
         } catch (error){
            console.error ('No se pudo conectar a la base de datos');

         }
        };
        export default sequelize;
    