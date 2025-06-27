import { Router } from 'express';
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
} from '../controllers/movie.controllers.js';

const router = Router();

// Ruta para obtener todas las películas
router.get('/movies', getAllMovies);

// Ruta para obtener una película por ID
router.get('/movies/:id', getMovieById);

// Ruta para crear una nueva película
router.post('/movies', createMovie);

// Ruta para actualizar una película existente
router.put('/movies/:id', updateMovie);

// Ruta para eliminar una película
router.delete('/movies/:id', deleteMovie);

export default router;
