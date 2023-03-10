#!/usr/bin/env node

import {rps, rpsls} from "./lib/rpsls.js"
import minimist from 'minimist'
import express from 'express'

var argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;

const app = express();

app.get('/app', (err, res) => {
    res.status(200);
    res.end();
});

app.get('/app/rps', (err, res) => {
    res.status(JSON.stringify(rps()));
})

app.get('/app/rpsls', (err, res) => {
    res.status(JSON.stringify(rpsls()))
})