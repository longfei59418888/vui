/**
 * Created by DELL on 2017/7/15.
 */
var path = require('path')
var express = require('express')
var webpack = require('webpack');

var app = new express();
var webpackConfig = require('./webpack.conf')
var compiler = webpack(webpackConfig)
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})
var hotMiddleware = require('webpack-hot-middleware')(compiler)
app.use(devMiddleware)  //热加载
app.use(hotMiddleware)  //热刷新
app.all('/*',function (req,res) {
    res.sendfile('index.html');
})
app.listen(3333, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + 3333 + '\n')
})