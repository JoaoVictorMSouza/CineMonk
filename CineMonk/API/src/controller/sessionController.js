import { Router } from 'express';
const router = Router();

import SessionService from '../service/sessionService.js';
const service = new SessionService();

router.get('/', async (req, resp) => {
    try {
        const datas = await service.listDates();
        resp.send(datas);
    } catch (e) {
        resp.status(500).send({
            error: e
        })
    }
})


router.get('/filmes/:data', async (req, resp) => {
    try {
        const filmes = await service.listMovies(req.params.data);
        resp.send(filmes);
    } catch (e) {
        resp.status(500).send({
            error: e
        })
    }
})

export default router;