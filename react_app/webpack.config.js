module.exports = {

  //entry: ["./global.js", "./app.js"],
  entry: "./app1/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/app1/"
  }, 

  module: {
   preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'

      }
   ]
  },

 module: {
   loaders: [
     {
       test: [/\.js$/, /\.es6$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015'] 
       }
     }
   ]
 },

 resolve: {
   extensions: ['.js', '.es6']
 },

  watch: true


}
