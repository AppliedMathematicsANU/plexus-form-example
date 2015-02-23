module.exports = {
  context: __dirname,
  entry: [ "./app.jsx" ],
  output: {
    path: __dirname + "/public/js",
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node-modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: [ "", ".js", ".jsx" ]
  }
};
