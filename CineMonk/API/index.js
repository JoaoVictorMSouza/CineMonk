import express from 'express'
import MongoDB from 'mongodb';
import ioc from './ioc.js'
import setRoutes from './routes.js';

const startServer = (conn) => {
    ioc(conn);
    
    const server = express();
    setRoutes(express, server);
    
    server.listen(
        process.env.PORT,
        () => console.log('....: server started!'));   
}

const stopServer = (e) => {
    process.exit(-1);
}

const MongoClient = MongoDB.MongoClient;

MongoClient
    .connect('mongodb+srv://devmonk:d3v@cluster.ru31h.mongodb.net', { useUnifiedTopology: true })
    .then(startServer)
    .catch(stopServer);

    //mongodb+srv://JVZer0:59792001Jo@cluster0.rbsmx.mongodb.net