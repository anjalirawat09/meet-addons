// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'meetAddon', // Exposed globally
  },
  mode: 'production',
};
