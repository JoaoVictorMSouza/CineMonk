import SessionDatabase from "../database/sessionDatabase.js";
const db = new SessionDatabase();

import datesUtils from '../utils/datesUtils.js';
const datesTools = new datesUtils();

export default class SessionService{
    async listDates(){
        let datas = await db.listDates();
        let resul = datesTools.formatado(datas);
        return resul;
    }

    listMovies(date){
        return db.listMovies(date);
    }
}