/**
 * Created by hanminghui on 16/9/16.
 */
var webpack = require('webpack');
var path = require('path');

var config = {
    entry: path.resolve(__dirname + '/base'),
    output: {
        path: path.resolve(__dirname+'/dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx','.es6']
    },
    module:{
        loaders:[
            {
                test:/\.js[x]?$/,
                loader: 'babel-loader',
                exclude:/node_modules/,
                query:{presets: ['es2015','react']}
            }
        ]
    }
};

module.exports = config;