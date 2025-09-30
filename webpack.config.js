const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(css)$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(html)$/i,
                use:'html-loader'
            },
            {
                test:/\.(jpeg|jpg|webp|png)$/i,
                type:'asset/resource'
            },
            {
                test:/\.(otf)$/i,
                type: "asset/resource"
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
    devtool: 'eval-source-map',
    devServer: {
        watchFiles: ['./src/index.html'],
    },
};