const express = require('express');
const path = require('path');
const http = require('http');

const index = require ('./routes/index');
const items = require ('./routes/items');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/dist/myapp'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

app.use('/', index)
app.use('/api', items)

server.listen(port, ()=> {
    console.log(`server started on port ${port} `)
});