
import session from './src/controller/sessionController.js'
import cors from 'cors';

export default function setRoutes(express, server) {
    server.use(express.json());
    server.use(cors());
    server.use('/sessao', session);
}
