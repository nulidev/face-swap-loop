const path = require('path');
const https = require('https');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output filename
  },
  module: {
    rules: [
      // Define loaders for processing different types of files
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile ES6+ syntax
          options: {
            presets: ['@babel/preset-env'] // Use @babel/preset-env to target specific browsers
          }
        }
      }
    ]
  },
  resolve: {
    // Optionally configure fallbacks for Node.js core modules
    fallback: {
      "https": require.resolve("https-browserify")
    }
  },
  // Optionally configure externals if needed
  externals: {
    // Add externals here if necessary
  },
  // Optionally configure plugins if needed
  plugins: [
    // Add plugins here if necessary
  ]
};
