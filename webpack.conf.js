/**
 * Created by DELL on 2017/7/15.
 */
var webpack = require('webpack');

module.exports = {
    entry:{
        app:'./src/main.js',
    },
    output:{
        path:'/',
        publicPath:'/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.vue'],  //自动解析扩展名
        alias: { //别名
            'vue-router': 'vue-router/dist/vue-router.js',
            'vue$': 'vue/dist/vue.common.js',
        }
    },
    module: {
        rules:[
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',query: {presets: ['es2015','stage-0']}},
            {test: /\.(css|scss)/, loader: "style-loader!css-loader?postcss-loader!sass-loader"},
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
        ]
    },
    devtool: '#source-map',//sass
    plugins:[]
}