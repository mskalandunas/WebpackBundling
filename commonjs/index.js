const express = require('express');
const { baseRouter } = require(__dirname + '/route');

const app = express();

app.use('/', baseRouter);

app.listen(3000, () => console.log('Listening from commonjs module'));