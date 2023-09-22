
import { Router } from 'express'
import SeatService from '../service/seatService.js'

const router = Router();
const service = new SeatService();


router.get('/', async (req, resp) => {
    try {
        let { day, movie, room, hour } = req.query;
        let seats = await service.getSeats(day, movie, room, hour);
        resp.send(seats);
    } catch (e) {
        resp.status(500).send({
            error: e
        })
    }
})


export default router;