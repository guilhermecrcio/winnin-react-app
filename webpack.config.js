const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf)$/,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        alias: {
            modules: __dirname+'/node_modules'
        }
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    }
}