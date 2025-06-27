import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Movie = sequelize.define('movie', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(40),
    allowNull: false,
    unique: true
  },
  director: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default Movie;
