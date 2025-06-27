import { Router } from "express";
import {
getAllMovies,
getMovieById,
updateMovie,
deleteMovie,
createMovie
} from'../controllers/movie.controllers.js';

const router = Router();

router.get('/movies', getAllMovies);
router.get('/movies/:id', getMovieById);
router.post('/movies', createMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

export default router;