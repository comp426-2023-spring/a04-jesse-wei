#!/usr/bin/env node

import {rps, rpsls} from "./lib/rpsls.js"
import minimist from 'minimist'
import express from 'express'

var argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/app', (req, res) => {
    res.status(200).send('200 OK').end();
});

app.get('/app/rps', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot))).end();
})

app.get('/app/rpsls', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
})

app.post('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot))).end();
})

// app.post('/app/rps/play*', (req, res) => {
//     res.status(200).send(JSON.stringify(rps(req.body.shot))).end();
// })

app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
})

// app.post('/app/rpsls/play*', (req, res) => {
//     res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
// })

app.get('/app/rps/play/rock', (req, res) => {
    res.status(200).send(JSON.stringify(rps('rock'))).end();
})

app.get('/app/rps/play/paper', (req, res) => {
    res.status(200).send(JSON.stringify(rps('paper'))).end();
})

app.get('/app/rps/play/scissors', (req, res) => {
    res.status(200).send(JSON.stringify(rps('scissors'))).end();
})

app.get('/app/rpsls/play/rock', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls('rock'))).end();
})

app.get('/app/rpsls/play/paper', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls('paper'))).end();
})

app.get('/app/rpsls/play/scissors', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls('scissors'))).end();
})

app.get('/app/rpsls/play/lizard', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls('lizard'))).end();
})

app.get('/app/rpsls/play/spock', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls('spock'))).end();
})

app.get('*', (req, res) => {
    try {
        body = req.body;
        res.status(200).send(JSON.stringify(rps(body.shot))).end();
    } catch (error) {
        res.status(404).send('404 NOT FOUND').end();
    }
})

app.listen(port);
