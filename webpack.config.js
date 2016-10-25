module.exports = {
  entry: {
    'iQ': __dirname+'/src/ignisQuery-functionnal.js',
  },
  output:{
    path: __dirname+'/dist/',
    filename: '[name].js'
  }
  ,
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
