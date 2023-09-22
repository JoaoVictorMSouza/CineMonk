import datesUtils from '../utils/datesUtils.js';
const datesTools = new datesUtils();

let db;

export default class SessaoDatabase{
    static inject(conn){
        db = conn.db('ingressos').collection('sessoes');
    }

    async listDates() {
        let today = datesTools.toISOBRString(new Date()).substr(0, 10);
        let resp = await db.aggregate([
            { '$match':     { data: { '$gte': today } } },
            { '$project':   { data: 1, _id: 0 } },
            { '$group':     { _id: '$data' } },
            { '$project':   { data: '$_id', _id: 0 } },
            { '$sort':      { data: 1 } },
            { '$limit': 7 }
        ]).toArray();
        return resp;
    }

    async listMovies(date) {
        let resp = await db.aggregate([
            {'$match':{ data: date }},
            {'$project': {_id: 0} },
            {'$sort':{'filme.nome': 1}}
          ]).toArray()
        return resp;
    }
}