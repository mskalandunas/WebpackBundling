const path = require('path');

module.exports = {
  entry: path.resolve('esm', 'index.js'),
  output: {
    filename: 'server.dist.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node'
};