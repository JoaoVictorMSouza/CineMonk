const express = require('express');
const server = express();

const cors = require('cors');
server.use(cors());

const MongoDB = require('mongodb').MongoClient;
let conexao;

async function conectarDB(){
    conexao = await MongoDB.connect('mongodb+srv://JVZer0:59792001Jo@cluster0.rbsmx.mongodb.net', { useUnifiedTopology: true });
    console.log("Success");
}

conectarDB();

server.get(
        '/filmes',
        async (req,resp) => {
            let db = conexao.db('filmes').collection('filmes');
            let resul = await db.find().toArray();;
            resp.send(resul);
        }
    )


server.listen(
        process.env.PORT,
        () => console.log("The API has been initial")
    );