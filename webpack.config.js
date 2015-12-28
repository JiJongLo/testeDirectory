var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/)

module.exports = {
    devtool: 'source-map',
    entry: {
        main: [
            './scripts/main.js',
            'webpack-dev-server/client?http://localhost:9002',
            'webpack/hot/only-dev-server'
        ]
    },
    output: {
        publicPath: 'http://localhost:9002/',
        filename: '/js/[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ['style', 'css', 'autoprefixer', 'sass'] }
        ]
    },
    plugins: [ignore],
    devServer: {
        host: '0.0.0.0',
        port : '9002',
        proxy: {
            '/api/*': 'http://localhost:9001'
        }
    }
};