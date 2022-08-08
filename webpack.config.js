const path = require('path')
const webpack = require('webpack')


module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname,'assets','scripts'),
        publicPath: 'assets/scripts/'
    },
    devServer: {
        static: {
            directory: './',
        },
    }
}

