import express from 'express';
import dotenv from 'dotenv';
import movieRoutes from '.src/routes/movie.routes.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); 
app.use('/api', movieRoutes
)
initBD().then(() => {
    app.listen(PORT, () => {
        console.log ("el servidor esta corriendo en https://localhost" + PORT)
    })
}
)