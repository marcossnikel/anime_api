import express from 'express';
import animeController from '../controller/animeController.js';

const router = express.Router();


router
    .get("/animes", animeController.listAnimes)
    .get("/animes/:id",animeController.listAnimeID)
    .post('/animes',animeController.registerAnime)
    .put('/animes/:id',animeController.atualizeAnime)
    .delete('/animes/:id',animeController.excludeAnime)


export default router;