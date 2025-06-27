import express from 'express';
import movieRoutes from './src/routes/movie.routes.js';
import { initBD } from './src/config/database.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/movies', movieRoutes);

const startServer = async () => {
  try {
    await initBD();  // Esperamos que se conecte y sincronice la DB
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error iniciando el servidor:', error.message);
  }
};
startServer();