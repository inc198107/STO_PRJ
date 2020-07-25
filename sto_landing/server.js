const { createServer } = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');


const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 3030);

const app = express();

    app.disable('x-povered-by');
    app.use(compression());
    app.use(morgan('common'));
    app.use(express.static(__dirname));
    app.use(express.static(path.resolve(__dirname, 'build')));

    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })

const server = createServer(app)

server.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server started on ${PORT}`)
})