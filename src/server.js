const express = require('express');
const { createServer } = require('http');

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || process.env.SERVER_PORT || 0;
const packageInfo = require('../package.json');



module.exports = { app, server, PORT };
