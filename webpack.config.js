// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'helloWorld',   // ✅ Match docs
    libraryTarget: 'var',    // ✅ export to window.helloWorld
  },
  mode: 'production',
};


