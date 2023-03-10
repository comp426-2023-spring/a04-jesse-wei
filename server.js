#!/usr/bin/env node

import {rps, rpsls} from "./lib/rpsls.js"
import minimist from 'minimist'
import express from 'express'

var argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;

const app = express();

app.get('/app', (req, res) => {
    res.status(200).send('OK').end();
});

app.get('/app/rps', (req, res) => {
    res.status(200).send(JSON.stringify(rps())).end();
})

app.get('/app/rpsls', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls())).end();
})

app.get('/app/rps/play', (req, res) => {

})

app.get('/app/rpsls/play', (req, res) => {

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
    res.status(404).send('NOT FOUND').end();
})

app.listen(port);