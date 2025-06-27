import Movie from '../models/movie.model.js';
import { Op } from 'sequelize';

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json(movies);
  } catch (error) {
    console.error('no se pudo obtenere las peliculas:', error);
    res.status(500).json({ message: 'Error del servidor.' });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(404).json({ message: 'pelicula no encontrada.' });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error(`no se pudo obtener la pelicula con id ${req.params.id}:`, error);
    res.status(500).json({ message: 'error del servidor.' });
  }
};

export const createMovie = async (req, res) => {
  try {
    const { title, director, duration, genre, description } = req.body;

    if (!title || !director || !duration || !genre) {
      return res.status(400).json({ message: ' (title, director, duration, genre) son obligatorios.' });
    }

    const existingMovie = await Movie.findOne({ where: { title } });
    if (existingMovie) {
      return res.status(409).json({ message: `Ya existe una peli con ese titulo: '${title}'.` });
    }

    const newMovie = await Movie.create({
      title,
      director,
      duration,
      genre,
      description,
    });

    res.status(201).json(newMovie);
  } catch (error) {
    console.error('error al crear la pelicula:', error);
    res.status(500).json({ message: 'error del servidor.' });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, director, duration, genre, description } = req.body;

    const movie = await Movie.findByPk(id);
    if (!movie) {
      return res.status(404).json({ message: 'no se encontro la pelicula.' });
    }


    if (title && title !== movie.title) {
      const existingMovieWithNewTitle = await Movie.findOne({
        where: {
          title: title,
          id: { [Op.ne]: id }
        }
      });
      if (existingMovieWithNewTitle) {
        return res.status(409).json({ message: `Ya existe otra película con el título: '${title}'.` });
      }
    }

    movie.title = title || movie.title;
    movie.director = director || movie.director;
    movie.duration = duration || movie.duration;
    movie.genre = genre || movie.genre;
    movie.description = description !== undefined ? description : movie.description;

    await movie.save();

    res.status(200).json(movie);
  } catch (error) {
    console.error(`Error al actualizar la película con ID ${req.params.id}:`, error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findByPk(id);
    if (!movie) {
      return res.status(404).json({ message: 'Película no encontrada para eliminar.' });
    }

    await movie.destroy();

    res.status(204).send();
  } catch (error) {
    console.error(`Error al eliminar la película con ID ${req.params.id}:`, error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};
