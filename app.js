const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

const router = require('./route/my.routes')

app.use(express.json())


//setting up confg file
dotenv.config({path:'./.env'})


//setting for route
app.use(router);

//const PORT = process.env.PORT;
console.log('server started on port:',5000);
app.listen('5000');