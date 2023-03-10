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

app.listen(port);