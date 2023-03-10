#!/usr/bin/env node

import {rps, rpsls} from "./lib/rpsls.js"
import minimist from 'minimist'
import express from 'express'
import bodyParser from 'body-parser'

var argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

app.post('/app/rpsls/play*', (req, res) => {
    const body = req.body
    if (body.shot == 'lizard' || body.shot == 'spock') {
        res.status(200).send(JSON.stringify(rpsls(body.shot))).end();
    } else {
        res.status(200).send(JSON.stringify(rps(body.shot))).end();
    }
})

app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
})

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
    res.status(404).send('404 NOT FOUND').end();
})

app.listen(port);