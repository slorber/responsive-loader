const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index'),
  mode: 'production',
  module: {
    rules: [
      // This rule will be matched when the resourceQuery contains `minmax`, e.g. `cat-1000.jpg?minmax`
      {
        test: /\.(png|jpg)$/,
        resourceQuery: /minmax/,
        loader: require.resolve('../../lib/index'),
        options: {
          name: '[name].[width].[ext]',
          min: 100,
          max: 300,
          adapter: require('../../sharp')
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: require.resolve('../../lib/index'),
        options: {
          name: '[name].[width].[ext]',
          sizes: [500, 750, 1000],
          adapter: require('../../sharp')
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'foobar/',
    filename: 'test.js'
  },
  target: 'node'
};
