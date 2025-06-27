import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { type } from "os";
import { title } from "process";
 
const movie = sequelize.define('movie',{
    id:{
        type:DataTypes.INTEGER(20),
        AllowNull:false,
        unique:true
    }, 
    title: {
        type:DataTypes.STRING(40),
        AllowNull:false,
        unique:true
    },
    director: {
        type:DataTypes.STRING(20),
        AllowNull:false
    },
    genre: {
        type:DataTypes.STRING(10),
        AllowNull:false
    },
    description: {
        type:DataTypes.STRING,
        AllowNull:true 
    },

})
await movie.sync();
export default movie;