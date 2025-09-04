// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'meetAddon',          // name of global object
    libraryTarget: 'umd',          // ensure compatibility
    globalObject: 'this',          // works in browser & Node
  },
  mode: 'production',
};


