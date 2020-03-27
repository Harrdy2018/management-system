const path=require("path");
const VueLoaderPlugin=require("vue-loader/lib/plugin");

const config={
  entry: {
    app:"./src/index.js"
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname,"dist")
  },
  module: {
    rules: [
      {test: /\.css$/,use: ["style-loader","css-loader"]},
      {test: /\.vue$/,use: ["vue-loader"]},
      {test: /\.(png|svg|jpg|gif)$/,use: ['file-loader']},
      {test: /\.(woff|woff2|eot|ttf|otf)$/,use: ['file-loader']}
    ]
  },
  resolve: {
    alias: {
      "same": __dirname,
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  mode: "development"
}

module.exports=config;