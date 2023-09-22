
import SessaoDatabase from '../database/sessionDatabase.js';
const db = new SessaoDatabase();


export default class SessaoService {
    listDates() {
        return db.listDates();
    }

    listMovies(date) {
        return db.listMovies(date);
    }
}
