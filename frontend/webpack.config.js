// webpack.config.js
module.exports = {
      entry: './src/index.js',
      output: {
        filename: './build/bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      }
    };

    