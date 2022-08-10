const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')


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
    },
    devtool: 'eval-cheap-source-map',

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                            targets: "defaults",
                            useBuiltIns: 'usage',
                            corejs: { version: 3 }
                        }]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
         new CleanPlugin.CleanWebpackPlugin()
    ]
}

