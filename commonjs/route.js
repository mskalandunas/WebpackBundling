const Router = require('express').Router;

const controller = (req, res) => {
  res.send('Hello world');
};

module.exports = {
  baseRouter: Router().get('/', controller)
};